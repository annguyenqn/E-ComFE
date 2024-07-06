import { EmailControl, PasswordControl } from '@/components/controll';
import { schemaKey } from '@/constants/schema';
import { useCreateUserFormContext } from './ceeateUserFormContext';

const Email = () => (
  <EmailControl
    nameControll={schemaKey.email}
    useContext={useCreateUserFormContext}
    label='Email'
  />
);

const Password = () => (
  <PasswordControl
    nameControll={schemaKey.password}
    useContext={useCreateUserFormContext}
    label='Password'
  />
);

const ConfirmPassword = () => (
  <PasswordControl
    nameControll={schemaKey.confirmPassword}
    useContext={useCreateUserFormContext}
    label='Confirm password'
  />
);

const CreateUserFormControl = { Email, Password, ConfirmPassword };
export { CreateUserFormControl };
