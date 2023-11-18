import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user-service.port";

@Injectable()
export class AuthService {
	constructor(@Inject(UserService) private readonly userService: UserService, private readonly jwtService: JwtService) {}

	async signIn(email: string, password: string) {
		debugger;
		const user = await this.userService.findByEmail(email);
		if(user?.password !== password) {
			throw Error("Wrong credentials");
		}

		const payload = { sub: user.userId, username: user.email};

		return {
			// access_token: this.jwtService.signAsync(payload),
		}
	}
}
