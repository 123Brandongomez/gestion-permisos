import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RutasService } from './rutas.service';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('rutas')
@UseGuards(JwtAuthGuard)

export class RutasController {
  constructor(private readonly rutasService: RutasService) {}

  @Post()
  create(@Body() dto: CreateRutaDto) {
    return this.rutasService.create(dto);
  }

  @Get()
  findAll() {
    return this.rutasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rutasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRutaDto) {
    return this.rutasService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rutasService.remove(+id);
  }
}
