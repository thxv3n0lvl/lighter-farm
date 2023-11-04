import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { CreateUserCommand } from './user.dto';

@Controller({
  path: 'user',
  version: ['1'],
})
export class UserController {
  constructor(readonly userService: UserService) {} // TODO: check how to use IUserService instead the UserService concrete class.

  @Post()
  async createUser(@Body() createUserCommand: CreateUserCommand): Promise<any> {
    const user = await this.userService.createUser(
      createUserCommand.email,
      createUserCommand.password,
      createUserCommand.languagePreference,
      createUserCommand.gender,
      createUserCommand.birthYear,
    );

    return { ...user };
  }
}
