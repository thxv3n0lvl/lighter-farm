import { Inject, Injectable } from '@nestjs/common';
import { User, createUser } from '../../domain/model/user.model';
import { UserRepository } from '../../domain/user.repository';
import { IUserService } from '../user.service.interface';

@Injectable() // TODO: figure out how to remove nestjs dependencies
export class UserService implements IUserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}
  async createUser(
    email: string,
    password: string,
    languagePreference: string,
    gender: string,
    birthYear: number,
  ): Promise<User> {
    const user = createUser(
      email,
      password,
      languagePreference,
      gender,
      birthYear,
    );
    this.userRepository.create(user);
    return user;
  }

  async findByEmail(email: string) {
    throw Error('no implemented yet');
    // return this.users.find((user) => user.email === email);
  }
}
