import Role from '@/types/Role';

export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  email: string;
  phone?: string | null;
  avatar?: string | null;
  capabilities?: string[];
}
