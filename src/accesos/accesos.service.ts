import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acceso } from './entities/acceso.entity';
import { CreateAccesoDto } from './dto/create-acceso.dto';
import { UpdateAccesoDto } from './dto/update-acceso.dto';

@Injectable()
export class AccesosService {
  constructor(
    @InjectRepository(Acceso)
    private readonly accesoRepository: Repository<Acceso>,
  ) {}

  create(createAccesoDto: CreateAccesoDto) {
    const nuevoAcceso = this.accesoRepository.create(createAccesoDto);
    return this.accesoRepository.save(nuevoAcceso);
  }

  findAll() {
    return this.accesoRepository.find({ relations: ['usuarioRelacion'] });
  }

  async findOne(id: number) {
    const acceso = await this.accesoRepository.findOne({
      where: { idAcceso: id },
      relations: ['usuarioRelacion'],
    });
    if (!acceso) throw new NotFoundException(`Acceso con id ${id} no encontrado`);
    return acceso;
  }

  async update(id: number, updateAccesoDto: UpdateAccesoDto) {
    const acceso = await this.findOne(id);
    Object.assign(acceso, updateAccesoDto);
    return this.accesoRepository.save(acceso);
  }

  async remove(id: number) {
    const acceso = await this.findOne(id);
    return this.accesoRepository.remove(acceso);
  }
}
