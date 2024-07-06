'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PagePath } from '@/constants';
import { useForgotPasswordMutation } from '@/proxy/http';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CardWithForm() {
  const router = useRouter();
  const redirectToSignIn = () => {
    router.replace(PagePath.LOG_IN);
  };
  const [forgotPassword] = useForgotPasswordMutation();
  const [isSentMail, setIsSentMail] = useState(false);
  const [email, setEmail] = useState('');
  const handleSendMail = async () => {
    const result = await forgotPassword({ email });
    if (result.error) {
      alert('Failed to send email: ' + JSON.stringify(result.error));
      return;
    }
    setIsSentMail(true);
  };
  const renderHeader = () => {
    return isSentMail ? (
      <CardHeader>
        <CardTitle>Email Sent</CardTitle>
        <CardDescription>
          We have sent an email to your account. Please follow the instructions in the email to
          reset your password.
        </CardDescription>
      </CardHeader>
    ) : (
      <CardHeader>
        <CardTitle>Find Your Email</CardTitle>
        <CardDescription>
          Please enter your email address or mobile number to search for your account.
        </CardDescription>
      </CardHeader>
    );
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Card className='w-[350px]'>
        {renderHeader()}
        {isSentMail ? null : (
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>New password</Label>
                  <Input
                    placeholder='Enter your email'
                    type='email'
                    autoCapitalize='none'
                    onChangeText={setEmail}
                    value={email}
                    name='email'
                  />
                </div>
              </div>
            </form>
          </CardContent>
        )}
        <CardFooter className='flex justify-between'>
          <Button variant='outline' onClick={redirectToSignIn}>
            Back to Login
          </Button>
          <Button onClick={handleSendMail}>{isSentMail ? 'Resent' : 'Send'}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
