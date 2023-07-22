import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() registerAuth: RegisterAuthDto) {
    return await this.authService.register(registerAuth);
  }

  @Post('/login')
  async login(@Body() registerAuth: LoginAuthDto) {
    return await this.authService.login(registerAuth);
  }
}
