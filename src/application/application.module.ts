import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { DomainModule } from 'src/domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [UserService, AuthService],
  exports: [UserService, AuthService],
})
export class ApplicationModule {}
