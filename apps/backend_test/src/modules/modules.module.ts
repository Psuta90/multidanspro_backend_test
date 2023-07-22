import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [AuthModule, JobModule]
})
export class ModulesModule {}
