'use client';
import { Button } from '@/components/ui/button';
import { PagePath } from '@/constants';
import { cn } from '@/lib/utils';
import { useLoginMutation } from '@/proxy/http';
import { setIsLoading } from '@/store/global';
import LoginRequest from '@/types/LoginRequest';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { CreateUserFormContext, useCreateUserFormControlProvider } from './ceeateUserFormContext';
import { CreateUserFormControl } from './createUserFormControl';

export default function CreateUserForm({ ...props }) {
  const dispatch = useDispatch();
  const form = useCreateUserFormControlProvider();
  const router = useRouter();
  const [login] = useLoginMutation();
  const onSubmit = async (formPayload: LoginRequest) => {
    dispatch(setIsLoading(true));
    await login(formPayload);
    router.replace(PagePath.MAIN);
  };

  return (
    <div className={cn('grid gap-6')} {...props}>
      <CreateUserFormContext.Provider value={form}>
        <div className='grid gap-3'>
          <CreateUserFormControl.Email />
          <CreateUserFormControl.Password />
          <div className={cn('flex sm:flex-row sm:space-x-2')}>
            <Button onClick={form.handleSubmit(onSubmit)} disabled={false}>
              Create new user
            </Button>
          </div>
        </div>
      </CreateUserFormContext.Provider>
    </div>
  );
}
