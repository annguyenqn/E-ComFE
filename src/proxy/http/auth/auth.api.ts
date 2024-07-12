import { LocalStorageKey } from '@/constants';
import ForgotPassword from '@/types/ForgotPassword';
import LoginResponse from '@/types/LoginResponse';
import ResetPassword from '@/types/ResetPassword';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import AuthService from '@/service/auth';
import LocalStorageService from '@/service/localStorage';
import { api, authBaseQuery } from '../base.api';

export const authAPI = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    login: build.mutation({
      async queryFn(body, _api, _extraOptions) {
        const result = await authBaseQuery(
          {
            url: 'login',
            method: 'POST',
            body
          },
          _api,
          _extraOptions
        );
        console.log(result);
        console.log('client nextjs', Date.now());
        if (result.data) {
          LocalStorageService.setItem(
            LocalStorageKey.ACCESS_TOKEN,
            (result.data as LoginResponse).accessToken
          );
        }
        return result.data
          ? { data: AuthService.tranformLoginResponse(result.data as LoginResponse) }
          : { error: result.error as FetchBaseQueryError };
      }
    }),
    refresh: build.mutation({
      async queryFn(_arg, _api, _extraOptions) {
        const result = await authBaseQuery(
          {
            url: 'refresh',
            method: 'POST'
          },
          _api,
          _extraOptions
        );
        return result.data
          ? { data: AuthService.tranformLoginResponse(result.data as LoginResponse) }
          : { error: result.error as FetchBaseQueryError };
      }
    }),
    logout: build.mutation({
      async queryFn(_arg, _api, _extraOptions) {
        const result = await authBaseQuery(
          {
            url: 'logout',
            method: 'POST'
          },
          _api,
          _extraOptions
        );
        if (result.data) {
          LocalStorageService.removeItem(LocalStorageKey.ACCESS_TOKEN);
        }
        return result.data ? { data: result.data } : { error: result.error as FetchBaseQueryError };
      }
    }),
    forgotPassword: build.mutation<void, ForgotPassword>({
      query: (body) => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body
      })
    }),
    resetPassword: build.mutation<void, ResetPassword>({
      query: (body) => ({
        url: 'auth/reset-password',
        method: 'POST',
        body
      })
    })
  })
});

export const {
  useLoginMutation,
  useRefreshMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = authAPI;
