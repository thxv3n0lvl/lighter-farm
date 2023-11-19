import type { User } from './model/user.model';

export interface UserRepository {
  create(user: User): User;
  findByEmail(email: string): Promise<User>;
}

export const UserRepository = Symbol('UserRepository');
