import { Module } from '@nestjs/common';
import { UserController } from './rest/user.controller';
import { UserService } from "../application/user-service.port";
import { UserService as UserServiceImpl } from "../application/services/user.service";
import { UserRepository } from 'src/domain/user.repository';
import { UserPersistence } from './persistence/user.persistence';

@Module({
  controllers: [UserController],
  providers: [
    {provide: UserService, useClass: UserServiceImpl},
    {provide: UserRepository, useClass: UserPersistence},
  ],
})
export class InfrastructureModule {}
