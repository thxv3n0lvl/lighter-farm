import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';

@Module({
  imports: [DomainModule],
})
export class ApplicationModule {}
