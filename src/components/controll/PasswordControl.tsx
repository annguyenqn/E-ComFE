import { AppFormControl } from '@/components/form/formControl';
import { FormControlLabel } from '@/components/form/formControl/FormControlLabel';
import { Input } from '@/components/ui/input';
import { Controller } from 'react-hook-form';

type PasswordControlProps = {
  //TODO:defined type
  useContext: any;
  nameControll: string;
  label: string;
  placeholder?: string;
};

export function PasswordControl({
  useContext,
  nameControll,
  label,
  placeholder = 'Enter your password'
}: PasswordControlProps) {
  const {
    control,
    formState: { errors }
  } = useContext();

  return (
    <AppFormControl>
      <FormControlLabel>{label}</FormControlLabel>
      <Controller
        name={nameControll}
        control={control}
        render={({ field: { onChange, value }, fieldState: { invalid } }) => (
          <Input
            placeholder={placeholder}
            type='password'
            autoCapitalize='none'
            onChangeText={onChange}
            value={value}
            isInvalid={invalid}
            name='password'
          />
        )}
      />
      <AppFormControl.ErrorMessage>{errors.password?.message}</AppFormControl.ErrorMessage>
    </AppFormControl>
  );
}
