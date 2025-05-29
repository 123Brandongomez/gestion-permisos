import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ruta } from './entities/ruta.entity';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Injectable()
export class RutasService {
  constructor(
    @InjectRepository(Ruta)
    private readonly rutaRepository: Repository<Ruta>,
  ) {}

  create(dto: CreateRutaDto) {
    const ruta = this.rutaRepository.create(dto);
    return this.rutaRepository.save(ruta);
  }

  findAll() {
    return this.rutaRepository.find({
      relations: ['modulo', 'permisos'],
    });
  }

  async findOne(id: number) {
    const ruta = await this.rutaRepository.findOne({
      where: { idRuta: id },
      relations: ['modulo', 'permisos'],
    });
    if (!ruta) throw new NotFoundException(`Ruta con ID ${id} no encontrada`);
    return ruta;
  }

  async update(id: number, dto: UpdateRutaDto) {
    const ruta = await this.findOne(id);
    Object.assign(ruta, dto);
    return this.rutaRepository.save(ruta);
  }

  async remove(id: number) {
    const ruta = await this.findOne(id);
    return this.rutaRepository.remove(ruta);
  }
}
