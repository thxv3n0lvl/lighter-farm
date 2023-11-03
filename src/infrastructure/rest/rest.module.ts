import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import {TaskService} from "../../application/services/task.service";
import { UserController } from './user.controller';
import { UserService } from '../../application/services/user.service';
import { UserRepository } from '../../domain/user.repository';
import { UserPostgres } from "../user.postgres";

@Module({
    controllers: [TaskController, UserController],
    providers: [
        TaskService, 
        UserService,
        {
            provide: UserRepository,
            useClass: UserPostgres
        }
    ],
})
export class RestModule {}
