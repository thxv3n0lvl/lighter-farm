import { Module } from '@nestjs/common';
import { UserController } from './rest/user.controller';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  controllers: [UserController],
  imports: [ApplicationModule],
})
export class InfrastructureModule {}
