import { Module } from '@nestjs/common';
import { UtilService } from './util.service';
import { PrismaModule } from '@app/prisma';
import { Response } from './classes/response';

@Module({
  imports : [PrismaModule],
  providers: [UtilService,Response],
  exports: [UtilService,Response],
})
export class UtilModule {}
