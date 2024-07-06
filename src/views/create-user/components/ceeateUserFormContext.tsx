import { createUserSchemaConfig } from '@/constants/schema';
import CreateUser from '@/types/CreateUser';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
export type CreateUserFormContextData = ReturnType<typeof useCreateUserFormControlProvider>;
export const CreateUserFormContext = React.createContext({} as CreateUserFormContextData);

const useCreateUserFormResolver = () => {
  const createUserSchema = yup.object<CreateUser>().shape(createUserSchemaConfig);
  return yupResolver(createUserSchema, { abortEarly: false });
};

export function useCreateUserFormControlProvider() {
  const resolver = useCreateUserFormResolver();
  return useForm<CreateUser>({ resolver });
}

export function useCreateUserFormContext(): CreateUserFormContextData {
  return React.useContext(CreateUserFormContext);
}
