import { Role } from './role';

export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  role: Role = Role.User;
  token?: string = '';
}
