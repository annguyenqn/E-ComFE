import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import CreateUser from '..';

export function CreateUserModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create User</DialogTitle>
        <DialogDescription>Create and asign the permission for user</DialogDescription>
      </DialogHeader>
      <CreateUser />
    </DialogContent>
  );
}
