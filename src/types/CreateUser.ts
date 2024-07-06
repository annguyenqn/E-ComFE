import { Role } from './Role';

type CreateUser = {
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
};

export default CreateUser;
