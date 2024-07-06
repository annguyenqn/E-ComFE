import User from '@/models/User';
import { BaseResponse } from '@/types/BaseResponse';
import { api } from '../base.api';
import { BasePaginateResponse } from './../../../types/BaseResponse';
import { GetUsersPram } from './type';

export const userAPI = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getUsers: build.query<BasePaginateResponse<User>, GetUsersPram>({
      query: (params) => ({
        url: 'users',
        method: 'GET',
        params
      }),
      transformResponse: (
        response: BaseResponse<BasePaginateResponse<User>>
      ): BasePaginateResponse<User> => response.data
    })
  })
});

export const { useGetUsersQuery } = userAPI;
