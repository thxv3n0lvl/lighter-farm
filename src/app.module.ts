import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';

@Module({ imports: [InfrastructureModule, ApplicationModule] })
export class AppModule {}
