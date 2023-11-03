import type { User } from './model/user.model';

export interface UserRepository {
	create(user: User): User;
	find(): User;
}

export const UserRepository = Symbol("UserRepository");
