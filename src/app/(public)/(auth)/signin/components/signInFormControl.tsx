import { useSigninFormContext } from './useSignInFormControl';
import { EmailControl, PasswordControl } from '@/components/control';

const Email = () => {
  return <EmailControl nameControl='email' useContext={useSigninFormContext} label='Email' />;
};

const Password = () => {
  return (
    <PasswordControl nameControl='password' useContext={useSigninFormContext} label='Password' />
  );
};

const SignInFormControl = { Email, Password };
export { SignInFormControl };
