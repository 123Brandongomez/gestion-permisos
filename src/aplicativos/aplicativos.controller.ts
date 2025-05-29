import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { AplicativosService } from './aplicativos.service';
import { CreateAplicativoDto } from './dto/create-aplicativo.dto';
import { UpdateAplicativoDto } from './dto/update-aplicativo.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('aplicativos')
@UseGuards(JwtAuthGuard)

export class AplicativosController {
  constructor(private readonly aplicativosService: AplicativosService) {}

  @Post()
  create(@Body() dto: CreateAplicativoDto) {
    return this.aplicativosService.create(dto);
  }

  @Get()
  findAll() {
    return this.aplicativosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aplicativosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAplicativoDto) {
    return this.aplicativosService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aplicativosService.remove(+id);
  }
}
