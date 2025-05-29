import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity'; // Asegúrate de que esta entidad exista
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Usuario)
    private readonly vendedorRepository: Repository<Usuario>,
    private readonly configService: ConfigService,
  ) {
    console.log('JWT_SECRET:', this.configService.get('JWT_SECRET'));
  }

  async login(login: string, password: string) {
    const usuario = await this.vendedorRepository.findOne({
      where: { login },
    });

    console.log('Usuario encontrado:', usuario);

    if (!usuario) {
      return null;
    }

    console.log('Comparando contraseñas:', usuario.password, password);

    if (usuario.password !== password) {
      return null;
    }

    return this.generarToken(usuario);
  }

  async generarToken(Usuario: Usuario) {
    const payload = {
      sub: Usuario.idUsuario,
      username: Usuario.idUsuario,
    };

    return {
      access_token: this.jwtService.sign(payload),
      Usuario: {
        idUsuario: Usuario.idUsuario
      }
    };
  }
}