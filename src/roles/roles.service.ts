import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './entities/role.entity';
import { CreateRolDto } from './dto/create-role.dto';
import { UpdateRolDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}

  create(dto: CreateRolDto) {
    const rol = this.rolRepository.create(dto);
    return this.rolRepository.save(rol);
  }

  findAll() {
    return this.rolRepository.find({
      relations: ['aplicativo', 'usuarios', 'permisos'],
    });
  }

  async findOne(id: number) {
    const rol = await this.rolRepository.findOne({
      where: { idRol: id },
      relations: ['aplicativo', 'usuarios', 'permisos'],
    });
    if (!rol) throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    return rol;
  }

  async update(id: number, dto: UpdateRolDto) {
    const rol = await this.findOne(id);
    Object.assign(rol, dto);
    return this.rolRepository.save(rol);
  }

  async remove(id: number) {
    const rol = await this.findOne(id);
    return this.rolRepository.remove(rol);
  }
}
