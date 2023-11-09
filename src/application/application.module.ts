import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { DomainModule } from 'src/domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [
    UserService,
  ],
  exports: [UserService],
})
export class ApplicationModule {}
