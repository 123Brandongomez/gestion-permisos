import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcrypt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  async validateUserPassword(password: string, usuario: any): Promise<any> {
    if (!(await bcrypt.compare(password, usuario.password))) {
      return null;
    }
    return usuario;
  }
}