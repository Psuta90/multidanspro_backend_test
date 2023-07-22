import { Global, Module } from '@nestjs/common';
import { AuthJwtService } from './auth_jwt.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth_jwt_strategy';
require('dotenv').config()

const jwtM = [
  PassportModule.register({
    defaultStrategy: 'jwt',
    property: 'user',
    session: false,
  }),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: parseInt(process.env.JWT_EXP),
    },
  }),
]

@Global()
@Module({
  imports:[
    ...jwtM
  ],
  providers: [AuthJwtService,JwtStrategy],
  exports: [AuthJwtService,JwtStrategy,...jwtM],
})
export class AuthJwtModule {}
