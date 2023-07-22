import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { HttpModule } from '@nestjs/axios';
import { UtilModule } from '@app/util';

@Module({
  imports:[HttpModule, UtilModule],
  controllers: [JobController],
  providers: [JobService]
})
export class JobModule {}
