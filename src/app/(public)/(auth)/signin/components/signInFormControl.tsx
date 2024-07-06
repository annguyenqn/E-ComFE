import { AppFormControl } from '@/components/form/formControl';
import { FormControlLabel } from '@/components/form/formControl/FormControlLabel';
import { Input } from '@/components/ui/input';
import { Controller } from 'react-hook-form';
import { useSigninFormContext } from './useSignInFormControl';

const Email = () => {
  const {
    control,
    formState: { errors }
  } = useSigninFormContext();

  return (
    <AppFormControl>
      <FormControlLabel>Email</FormControlLabel>
      <Controller
        name={'email'}
        control={control}
        render={({ field: { onChange, value }, fieldState: { invalid } }) => (
          <Input
            placeholder='Enter your email'
            type='email'
            autoCapitalize='none'
            onChangeText={onChange}
            value={value}
            isInvalid={invalid}
            name='email'
          />
        )}
      />
      <AppFormControl.ErrorMessage>{errors.email?.message}</AppFormControl.ErrorMessage>
    </AppFormControl>
  );
};

// const Password = () => (
//   <PasswordControl nameControll='password' useContext={useSigninFormContext} label='Password' />
// );

const SignInFormControl = { Email };
export { SignInFormControl };
