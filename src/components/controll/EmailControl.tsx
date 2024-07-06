import { AppFormControl } from '@/components/form/formControl';
import { FormControlLabel } from '@/components/form/formControl/FormControlLabel';
import { Input } from '@/components/ui/input';
import { Controller } from 'react-hook-form';

type EmailControlProps = {
  label: string;
  useContext: any;
  nameControll: string;
};

export function EmailControl({ label, useContext, nameControll }: EmailControlProps) {
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
}
