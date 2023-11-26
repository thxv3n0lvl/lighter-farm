import { Body, Controller, Get, Inject, Post, Request } from '@nestjs/common';
import {
  UserService,
  IUserService,
} from '../../application/user.service.interface';
import { CreateUserCommand } from './drivers/user.dto';
import { User } from 'src/domain/model/user.model';
import { NoAuth } from './auth.public.decorator';

@Controller({
  path: 'user',
  version: ['1'],
})
export class UserController {
  constructor(
    @Inject(UserService) private readonly userService: IUserService,
  ) {}

  @NoAuth()
  @Post()
  async createUser(
    @Body() createUserCommand: CreateUserCommand,
  ): Promise<User> {
    const user = await this.userService.createUser(
      createUserCommand.email,
      createUserCommand.password,
      createUserCommand.languagePreference,
      createUserCommand.gender,
      createUserCommand.birthYear,
    );

    return { ...user };
  }

  @Get('profile')
  async profile(@Request() req) {
    return await req.user;
  }
}
