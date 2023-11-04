import { User } from 'src/domain/model/user.model';

export interface UserService {
  createUser: (
    email: string,
    password: string,
    languagePreference: string,
    gender: string,
    birthYear: number,
  ) => Promise<User>;
}

export const UserService = Symbol('UserService');
