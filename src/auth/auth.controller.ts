import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(
      loginDto.login,
      loginDto.password,
    );

    if (!result) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return result;
  }
}