import { Controller, Get } from '@nestjs/common';
import { BackendTestService } from './backend_test.service';

@Controller()
export class BackendTestController {
  constructor(private readonly backendTestService: BackendTestService) {}

  @Get()
  getHello(): string {
    return this.backendTestService.getHello();
  }
}
