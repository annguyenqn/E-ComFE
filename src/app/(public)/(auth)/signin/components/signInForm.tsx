'use client';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { PagePath } from '@/constants';
import { cn } from '@/lib/utils';
import { useLoginMutation } from '@/proxy/http';
import { setIsLoading } from '@/store/global';
import LoginRequest from '@/types/LoginRequest';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { SignInFormControl } from './signInFormControl';
import { SigninFormContext, useSigninFormControlProvider } from './useSignInFormControl';

export default function SignInForm({ ...props }) {
  const dispatch = useDispatch();
  const form = useSigninFormControlProvider();
  const router = useRouter();
  const [login] = useLoginMutation();
  const onSubmit = async (formPayload: LoginRequest) => {
    dispatch(setIsLoading(true));
    await login(formPayload);
    router.replace(PagePath.MAIN);
  };

  return (
    <div className={cn('grid gap-6')} {...props}>
      <SigninFormContext.Provider value={form}>
        <div className='grid gap-2'>
          <div className='grid gap-3'>
            <SignInFormControl.Email />
            {/* <SignInFormControl.Password /> */}
          </div>
          <Button onClick={form.handleSubmit(onSubmit)} disabled={false}>
            {false && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
            Sign In with Email
          </Button>
        </div>
      </SigninFormContext.Provider>
      {/* <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <Button variant='outline' type='button' disabled={false}>
        {false ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.gitHub className='mr-2 h-4 w-4' />
        )}{' '}
        GitHub
      </Button> */}
    </div>
  );
}
