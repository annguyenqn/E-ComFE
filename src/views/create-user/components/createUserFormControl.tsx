import { EmailControl, PasswordControl } from '@/components/control';
import { schemaKey } from '@/constants/schema';
import { useCreateUserFormContext } from './ceeateUserFormContext';

const Email = () => (
  <EmailControl nameControl={schemaKey.email} useContext={useCreateUserFormContext} label='Email' />
);

const Password = () => (
  <PasswordControl
    nameControl={schemaKey.password}
    useContext={useCreateUserFormContext}
    label='Password'
  />
);

const ConfirmPassword = () => (
  <PasswordControl
    nameControl={schemaKey.confirmPassword}
    useContext={useCreateUserFormContext}
    label='Confirm password'
  />
);

const CreateUserFormControl = { Email, Password, ConfirmPassword };
export { CreateUserFormControl };
