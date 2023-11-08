import { Injectable } from '@nestjs/common';
import type { User } from '../../domain/model/user.model';
import { UserRepository } from '../../domain/user.repository';

@Injectable()
export class UserPersistence implements UserRepository {
  create(user: User): User {
    throw new Error('Method not implemented.');
  }
  find(): User {
    throw new Error('Method not implemented.');
  }
}
