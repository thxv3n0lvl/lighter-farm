// import { Module } from '@nestjs/common';
// import { TaskController } from './task.controller';
// import {TaskService} from "../../application/services/task.service";
// import { UserController } from './user.controller';
// import { UserService } from '../../application/services/user.service';
// import { UserRepository } from '../../domain/user.repository';
// import { UserPersistence } from "../persistence/user.persistence";

// @Module({
//     controllers: [TaskController, UserController],
//     providers: [
//         TaskService,
//         UserService,
//         {
//             provide: UserRepository,
//             useClass: UserPersistence
//         }
//     ],
// })
// export class RestModule {}
