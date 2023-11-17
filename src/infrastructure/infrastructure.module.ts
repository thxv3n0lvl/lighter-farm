import { DynamicModule, Module } from '@nestjs/common';
import { UserController } from './rest/user.controller';
import { UserService } from "../application/user-service.port";
import { UserService as UserServiceImpl } from "../application/services/user.service";
import { UserRepository } from 'src/domain/user.repository';
import { UserPersistence } from './persistence/user.persistence';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './persistence/user.entity';

@Module({})
export class InfrastructureModule {
  static register(_: Record<string, any>): DynamicModule {
    return {
      module: InfrastructureModule,
      controllers: [UserController],
      imports: [
        TypeOrmModule.forRoot({ // TODO: gather this info from env file
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '12341234',
          database: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]) // TODO: inject schemas from external file
      ],
      providers: [
        { provide: UserService, useClass: UserServiceImpl },
        { provide: UserRepository, useClass: UserPersistence },
      ],

    }
  }
}
