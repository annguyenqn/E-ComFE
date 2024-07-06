'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { CreateUserModal } from './createUserModal';

export default function CreateUserButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn('ml-3')} size={'sm'}>
          Create New User
        </Button>
      </DialogTrigger>
      <CreateUserModal />
    </Dialog>
  );
}
