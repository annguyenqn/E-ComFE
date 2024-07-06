import { LocalStorageKey } from '@/constants';
import AuthService from '@/service/auth';
import LocalStorageService from '@/service/localStorage';
import LoginResponse from '@/types/LoginResponse';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  prepareHeaders: (headers) => {
    const accessToken = LocalStorageService.getItem(LocalStorageKey.ACCESS_TOKEN);
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  }
});

export const authBaseQuery = fetchBaseQuery({
  baseUrl: `/api/`
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await authBaseQuery('/refresh', api, extraOptions);
        if (refreshResult.data) {
          /*
           * https://github.com/reduxjs/redux-toolkit/discussions/2097#discussioncomment-3079703
           */
          api.dispatch({
            type: 'auth/refreshToken',
            payload: AuthService.tranformLoginResponse(refreshResult.data as LoginResponse)
          });
          result = await baseQuery(args, api, extraOptions);
        } else {
          /*
           * https://github.com/reduxjs/redux-toolkit/discussions/2097#discussioncomment-3079703
           */
          api.dispatch({ type: 'auth/loggedOut' });
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
