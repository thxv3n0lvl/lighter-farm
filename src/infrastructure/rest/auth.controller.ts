import { Body, Controller, Inject, Post } from "@nestjs/common";
import type { LoginByEmailAndPasswordCommand } from "./drivers/login.command";
import { AuthService } from '../../application/auth-service.port';

@Controller("auth")
export class AuthController {
	constructor(@Inject(AuthService) private readonly authService: AuthService) {}

	@Post("login")
	async login(@Body() loginCommand: LoginByEmailAndPasswordCommand) {
		return this.authService.signIn(loginCommand.email, loginCommand.password);
	}

}
