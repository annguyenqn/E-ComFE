import { setPasswordSchemaConfig } from '@/constants/schema';
import ResetPasswordFormField from '@/types/ResetPasswordFormField';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
export type ResetPasswordFormContextData = ReturnType<typeof useResetPasswordFormControlProvider>;

export const ResetPasswordFormContext = React.createContext({} as ResetPasswordFormContextData);

const useResetPasswordFormResolver = () => {
  const schema = yup.object<ResetPasswordFormField>().shape(setPasswordSchemaConfig);
  return yupResolver(schema, { abortEarly: false });
};

export function useResetPasswordFormControlProvider() {
  const resolver = useResetPasswordFormResolver();
  return useForm<ResetPasswordFormField>({ resolver });
}

export function useResetPasswordFormContext(): ResetPasswordFormContextData {
  return React.useContext(ResetPasswordFormContext);
}
