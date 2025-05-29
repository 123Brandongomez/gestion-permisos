import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_super_secret_key_here',
    });
  }

  async validate(payload: any) {
    return { idUsuario: payload.sub, username: payload.username };
  }

  async validatePassword(password: string, hashedPassword: string) {
    if (!(await bcrypt.compare(password, hashedPassword))) {
      return null;
    }
    return true;
  }
}