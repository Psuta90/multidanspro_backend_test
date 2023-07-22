import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UtilService } from '@app/util';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor (
    private utilService:UtilService,
    private jwtService: JwtService
  ){}

  async register(registerAuth: RegisterAuthDto) {
    try {

      await this.utilService.db.user.create({
        data : {
          display_name : registerAuth.display_name,
          username : registerAuth.username,
          password :await bcrypt.hash(registerAuth.password, 10)
        }
      })
      
      return await this.utilService.response.success({data : registerAuth, message : "berhasil registrasi"})

    } catch (error) {
      console.log(error);
      return this.utilService.response.error({code: 400 , message : "gagal melakukan registrasi silahan masukan username atau password yang lain"})
    }
  }

  async login (loginAuth: LoginAuthDto) {
    try {
      
      const user = await this.utilService.db.user.findUnique({
        where : {
          username : loginAuth.username
        }
      })

      const IsMatch = await bcrypt.compare(loginAuth.password,user.password)
      
      if (IsMatch) {
        const token = this.jwtService.sign({username : user.username, display_name : user.display_name})
        return await this.utilService.response.success({
          code : 200, 
          data : token,
          message : "anda berhasil login"
        })
      }
      

      
    } catch (error) {
      console.log(error);
      
    }
  }
}
