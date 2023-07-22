import { Module } from '@nestjs/common';
import { BackendTestController } from './backend_test.controller';
import { BackendTestService } from './backend_test.service';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [BackendTestModule, ModulesModule],
  controllers: [BackendTestController],
  providers: [BackendTestService],
})
export class BackendTestModule {}
