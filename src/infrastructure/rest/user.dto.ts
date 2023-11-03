import { IsEmail, IsNotEmpty} from "class-validator";
import { User } from "src/domain/model/user.model";

export class CreateUserCommand implements Omit<User,"userId"> {
	@IsNotEmpty()
	@IsEmail()
  email: string;

	@IsNotEmpty()
  password: string;

  firstName: string;
  lastName: string;
  gender: string;
  birthYear: number;
  languagePreference: string;
};

