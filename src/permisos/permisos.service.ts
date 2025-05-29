import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permiso } from './entities/permiso.entity';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';

@Injectable()
export class PermisosService {
  constructor(
    @InjectRepository(Permiso)
    private readonly permisoRepository: Repository<Permiso>,
  ) {}

  create(dto: CreatePermisoDto) {
    const permiso = this.permisoRepository.create(dto);
    return this.permisoRepository.save(permiso);
  }

  findAll() {
    return this.permisoRepository.find({
      relations: ['usuario', 'rol', 'ruta'],
    });
  }

  async findOne(id: number) {
    const permiso = await this.permisoRepository.findOne({
      where: { idPermiso: id },
      relations: ['usuario', 'rol', 'ruta'],
    });
    if (!permiso) throw new NotFoundException(`Permiso con ID ${id} no encontrado`);
    return permiso;
  }

  async update(id: number, dto: UpdatePermisoDto) {
    const permiso = await this.findOne(id);
    Object.assign(permiso, dto);
    return this.permisoRepository.save(permiso);
  }

  async remove(id: number) {
    const permiso = await this.findOne(id);
    return this.permisoRepository.remove(permiso);
  }
}
