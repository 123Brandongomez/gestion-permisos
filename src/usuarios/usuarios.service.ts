import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  findAll(): Promise<Usuario[]> {
  return this.usuarioRepository.find({
    relations: ['aplicativo', 'rolRelacion'],
  });
}

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { idUsuario: id },
      relations: ['aplicativo', 'rolRelacion', 'permisos', 'accesos'],
    });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return usuario;
  }

  async update(id: number, updateDto: UpdateUsuarioDto): Promise<Usuario> {
    await this.usuarioRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
  }
}
