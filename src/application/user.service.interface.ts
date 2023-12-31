import { User } from 'src/domain/model/user.model';

export interface IUserService {
  createUser: (
    email: string,
    password: string,
    languagePreference: string,
    gender: string,
    birthYear: number,
  ) => Promise<User>;
  findByEmail: (email: string) => Record<string, any>;
}

export const UserService = Symbol.for('UserService');
