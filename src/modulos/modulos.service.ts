import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modulo } from './entities/modulo.entity';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';

@Injectable()
export class ModulosService {
  constructor(
    @InjectRepository(Modulo)
    private readonly moduloRepository: Repository<Modulo>,
  ) {}

  create(dto: CreateModuloDto) {
    const modulo = this.moduloRepository.create(dto);
    return this.moduloRepository.save(modulo);
  }

  findAll() {
    return this.moduloRepository.find({
      relations: ['aplicativo', 'rutas'],
    });
  }

  async findOne(id: number) {
    const modulo = await this.moduloRepository.findOne({
      where: { idModulo: id },
      relations: ['aplicativo', 'rutas'],
    });
    if (!modulo) throw new NotFoundException(`Módulo con ID ${id} no encontrado`);
    return modulo;
  }

  async update(id: number, dto: UpdateModuloDto) {
    const modulo = await this.findOne(id);
    Object.assign(modulo, dto);
    return this.moduloRepository.save(modulo);
  }

  async remove(id: number) {
    const modulo = await this.findOne(id);
    return this.moduloRepository.remove(modulo);
  }
}
