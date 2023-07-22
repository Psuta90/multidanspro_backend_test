import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JwtAuthGuard } from '@app/auth_jwt/auth_jwt_guard.guard';
import { ListJobsDto } from './dto/list-jobs';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/listJobs')
  async findAll(@Query() query : ListJobsDto) {
    return await this.jobService.findAll(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/listJobs/:id')
  async findOne(@Param('id') id:string) {
    return await this.jobService.findOne(id);
  }
}
