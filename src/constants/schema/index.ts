import { Roles } from '@/types/Role';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from '..';

export const schemaKey = {
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
  firstName: 'firstName',
  lastName: 'lastName',
  role: 'role'
};

export const loginSchemaConfig = {
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required')
};

export const setPasswordSchemaConfig = {
  password: yup
    .string()
    .required('New password is required')
    .matches(
      PASSWORD_PATTERN,
      'Password must be at least 8 characters long and contain a capital letter, a lowercase letter and a number or a symbol'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords not match')
    .required('Confirm password is required')
};

export const createUserSchemaConfig = {
  email: yup.string().email().required('Email is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  role: yup.string().oneOf(Roles, 'Invalid role').required('Role is required'),
  ...setPasswordSchemaConfig
};
