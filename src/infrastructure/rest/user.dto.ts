import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty} from "class-validator";
import { User } from "src/domain/model/user.model";

export class CreateUserCommand implements Omit<User,"userId"> {
	@ApiProperty({
		required: true
	})
	@IsNotEmpty()
	@IsEmail()
  email: string;

	@ApiProperty({
		required: true
	})
	@IsNotEmpty()
  password: string;

	@ApiProperty()
  firstName: string;

	@ApiProperty()
  lastName: string;

	@ApiProperty()
  gender: string;

	@ApiProperty({
		example: 1970
	})
  birthYear: number;

	@ApiProperty()
  languagePreference: string;
};

