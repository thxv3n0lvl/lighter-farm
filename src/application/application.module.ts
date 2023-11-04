import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserRepository } from 'src/domain/user.repository';
import { UserPersistence } from 'src/infrastructure/persistence/user.persistence';
import { DomainModule } from 'src/domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: UserPersistence,
    },
  ],
  exports: [UserService],
})
export class ApplicationModule {}
