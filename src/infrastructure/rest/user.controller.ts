import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService, IUserService } from '../../application/user.service.interface';
import { CreateUserCommand } from './drivers/user.dto';

@Controller({
  path: 'user',
  version: ['1'],
})
export class UserController {
  constructor(@Inject(UserService) private readonly userService: IUserService) {}

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
