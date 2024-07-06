'use client';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@radix-ui/react-checkbox';
import {
  CreateUserFormContext,
  useCreateUserFormControlProvider
} from './components/ceeateUserFormContext';
import { CreateUserFormControl } from './components/createUserFormControl';

export default function CreateUser() {
  const form = useCreateUserFormControlProvider();
  const onSubmit = async (formPayload: any) => {
    alert('onSubmit');
  };

  return (
    <div className='grid gap-4 py-4'>
      <ScrollArea>
        <CreateUserFormContext.Provider value={form}>
          <div className='grid gap-3 px-1'>
            <div className='grid gap-3'>
              <CreateUserFormControl.Email />
              <CreateUserFormControl.Password />
              <CreateUserFormControl.ConfirmPassword />
              <span>Page access:</span>
              <div>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
              </div>
            </div>
            <Button onClick={form.handleSubmit(onSubmit)} disabled={false}>
              Create User
            </Button>
          </div>
        </CreateUserFormContext.Provider>
      </ScrollArea>
    </div>
  );
}
