'use client';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { PagePath } from '@/constants';
import { cn } from '@/lib/utils';
import { useResetPasswordMutation } from '@/proxy/http';
import ResetPasswordFormField from '@/types/ResetPasswordFormField';
import { useRouter } from 'next/navigation';
import { ResetPasswordFormControl } from './resetPasswordFormControl';
import { ResetPasswordFormProps } from './type';
import {
  ResetPasswordFormContext,
  useResetPasswordFormControlProvider
} from './useResetPasswordFormControl';

export default function ResetPasswordForm(props: ResetPasswordFormProps) {
  const form = useResetPasswordFormControlProvider();
  const router = useRouter();
  const [resetPassword] = useResetPasswordMutation();
  const onSubmit = async ({ password }: ResetPasswordFormField) => {
    const result = await resetPassword({
      password: password,
      ...props
    });
    if (result.error) {
      alert('Failed to reset password: ' + JSON.stringify(result.error));
      return;
    }
    router.replace(PagePath.LOG_IN);
  };

  return (
    <div className={cn('grid gap-6')} {...props}>
      <ResetPasswordFormContext.Provider value={form}>
        <div className='grid gap-2'>
          <div className='grid gap-3'>
            <ResetPasswordFormControl.Password />
            <ResetPasswordFormControl.ConfirmPassword />
          </div>
          <Button onClick={form.handleSubmit(onSubmit)} disabled={false}>
            {false && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
            Set new password
          </Button>
        </div>
      </ResetPasswordFormContext.Provider>
    </div>
  );
}
