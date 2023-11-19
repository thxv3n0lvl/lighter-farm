import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService, IUserService } from '../user.service.interface';

@Injectable()
export class AuthService {
	constructor(@Inject(UserService) private readonly userService: IUserService, private readonly jwtService: JwtService) {}

	async signIn(email: string, password: string) {
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
