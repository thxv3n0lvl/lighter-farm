import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({ imports: [InfrastructureModule.register(null)] })
export class AppModule { }
