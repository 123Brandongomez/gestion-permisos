import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aplicativo } from './entities/aplicativo.entity';
import { CreateAplicativoDto } from './dto/create-aplicativo.dto';
import { UpdateAplicativoDto } from './dto/update-aplicativo.dto';

@Injectable()
export class AplicativosService {
  constructor(
    @InjectRepository(Aplicativo)
    private readonly aplicativoRepository: Repository<Aplicativo>,
  ) {}

  create(dto: CreateAplicativoDto) {
    const aplicativo = this.aplicativoRepository.create(dto);
    return this.aplicativoRepository.save(aplicativo);
  }

  findAll() {
    return this.aplicativoRepository.find({
      relations: ['usuarios', 'roles', 'modulos'],
    });
  }

  async findOne(id: number) {
    const aplicativo = await this.aplicativoRepository.findOne({
      where: { idAplicativo: id },
      relations: ['usuarios', 'roles', 'modulos'],
    });
    if (!aplicativo) throw new NotFoundException(`Aplicativo con ID ${id} no encontrado`);
    return aplicativo;
  }

  async update(id: number, dto: UpdateAplicativoDto) {
    const aplicativo = await this.findOne(id);
    Object.assign(aplicativo, dto);
    return this.aplicativoRepository.save(aplicativo);
  }

  async remove(id: number) {
    const aplicativo = await this.findOne(id);
    return this.aplicativoRepository.remove(aplicativo);
  }
}
