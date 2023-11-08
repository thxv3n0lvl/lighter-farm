import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from '../../application/user-service.port';
import { CreateUserCommand } from './user.dto';

@Controller({
  path: 'user',
  version: ['1'],
})
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {} // TODO: check how to use IUserService instead the UserService concrete class.

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
