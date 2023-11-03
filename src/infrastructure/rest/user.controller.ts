import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { CreateUserCommand } from './user.dto';

@Controller({
    path: "user",
    version: ["1"],
})
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserCommand: CreateUserCommand): Promise<any> {
        console.log(createUserCommand) // TODO: remove this
        const user = await this.userService.createUser(
            createUserCommand.email,
            createUserCommand.password,
            createUserCommand.languagePreference,
            createUserCommand.gender,
            createUserCommand.birthYear
        );

        return {...user};
    }
}

