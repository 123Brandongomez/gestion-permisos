import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('modulos')
@UseGuards(JwtAuthGuard)

export class ModulosController {
  constructor(private readonly modulosService: ModulosService) {}

  @Post()
  create(@Body() dto: CreateModuloDto) {
    return this.modulosService.create(dto);
  }

  @Get()
  findAll() {
    return this.modulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateModuloDto) {
    return this.modulosService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulosService.remove(+id);
  }
}
