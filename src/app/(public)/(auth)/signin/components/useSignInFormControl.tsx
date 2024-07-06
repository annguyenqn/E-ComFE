import { loginSchemaConfig } from '@/constants/schema';
import LoginRequest from '@/types/LoginRequest';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type SigninFormContextData = ReturnType<typeof useSigninFormControlProvider>;

export const SigninFormContext = React.createContext({} as SigninFormContextData);

const useSigninFormResolver = () => {
  const loginSchema = yup.object<LoginRequest>().shape(loginSchemaConfig);
  return yupResolver(loginSchema, { abortEarly: false });
};

export function useSigninFormControlProvider() {
  const resolver = useSigninFormResolver();
  return useForm<LoginRequest>({ resolver });
}

export function useSigninFormContext(): SigninFormContextData {
  return React.useContext(SigninFormContext);
}
