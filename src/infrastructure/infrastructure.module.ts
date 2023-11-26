import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './rest/user.controller';
import { AuthController } from './rest/auth.controller';
import { UserService } from '../application/user.service.interface';
import { UserService as UserServiceImpl } from '../application/services/user.service';
import { AuthService } from '../application/auth.service.interface';
import { AuthService as AuthServiceImpl } from '../application/services/auth.service';
import { UserRepository } from 'src/domain/user.repository';
import { UserPersistence } from './persistence/user.persistence';
import { User } from './persistence/user.entity';
import { secret } from './rest/constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './rest/auth.guard';

@Module({})
export class InfrastructureModule {
  static register(): DynamicModule {
    return {
      module: InfrastructureModule,
      controllers: [UserController, AuthController],
      imports: [
        TypeOrmModule.forRoot({
          // TODO: gather this info from env file
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '12341234',
          database: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]), // TODO: inject schemas from external file
        JwtModule.register({
          global: true,
          signOptions: { expiresIn: '60s' },
          secret,
        }),
      ],
      providers: [
        { provide: UserService, useClass: UserServiceImpl },
        { provide: AuthService, useClass: AuthServiceImpl },
        { provide: APP_GUARD, useClass: AuthGuard },
        { provide: UserRepository, useClass: UserPersistence },
      ],
    };
  }
}
