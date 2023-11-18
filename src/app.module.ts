import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({ imports: [InfrastructureModule.register()] })
export class AppModule { }
