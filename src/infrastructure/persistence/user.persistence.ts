import { Injectable } from '@nestjs/common';
import type { User } from '../../domain/model/user.model';
import { UserRepository } from '../../domain/user.repository';

@Injectable()
export class UserPersistence implements UserRepository {
  private readonly users: User[] = [
    {
      userId: '123',
      email: 'john@gmail.com',
      password: 'changeme',
      languagePreference: 'es',
      gender: 'male',
      birthYear: 1989,
    },
    {
      userId: '124',
      email: 'maria@gmail.com',
      password: 'guess',
      languagePreference: 'es',
      gender: 'male',
      birthYear: 1989,
    },
  ];

  create(_: User): User {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}
