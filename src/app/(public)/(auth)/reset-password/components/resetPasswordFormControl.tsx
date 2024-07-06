import { PasswordControl } from '@/components/controll';
import { schemaKey } from '@/constants/schema';
import { useResetPasswordFormContext } from './useResetPasswordFormControl';

const Password = () => (
  <PasswordControl
    nameControll={schemaKey.password}
    useContext={useResetPasswordFormContext}
    label='Password'
  />
);
const ConfirmPassword = () => (
  <PasswordControl
    nameControll={schemaKey.confirmPassword}
    useContext={useResetPasswordFormContext}
    label='Confirm Password'
    placeholder='Enter confirm password'
  />
);
const ResetPasswordFormControl = { Password, ConfirmPassword };
export { ResetPasswordFormControl };
