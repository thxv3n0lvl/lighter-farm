import { Inject, Injectable } from '@nestjs/common';
import {User, createUser} from "../../domain/model/user.model";
import {UserRepository} from "../../domain/user.repository";

@Injectable()
export class UserService {

    constructor(@Inject(UserRepository) private readonly userRepository: UserRepository) {}
    async createUser(	
        email: string,
    	  password: string,
    	  languagePreference: string,
    	  gender: string,
    	  birthYear: number,
    ): Promise<User> {
        const user = createUser(email, password, languagePreference, gender, birthYear);
        console.log(user); // TODO: remove this
        this.userRepository.create(user);
        return user
    }
}

