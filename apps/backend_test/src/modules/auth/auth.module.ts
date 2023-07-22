import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UtilModule } from '@app/util';
import { AuthJwtModule } from '@app/auth_jwt';

@Module({
  imports:[UtilModule,AuthJwtModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
