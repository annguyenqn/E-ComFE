import { PasswordControl } from '@/components/control';
import { schemaKey } from '@/constants/schema';
import { useResetPasswordFormContext } from './useResetPasswordFormControl';

const Password = () => (
  <PasswordControl
    nameControl={schemaKey.password}
    useContext={useResetPasswordFormContext}
    label='Password'
  />
);
const ConfirmPassword = () => (
  <PasswordControl
    nameControl={schemaKey.confirmPassword}
    useContext={useResetPasswordFormContext}
    label='Confirm Password'
    placeholder='Enter confirm password'
  />
);
const ResetPasswordFormControl = { Password, ConfirmPassword };
export { ResetPasswordFormControl };
