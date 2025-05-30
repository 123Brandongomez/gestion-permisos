import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { AccesosService } from './accesos.service';
import { CreateAccesoDto } from './dto/create-acceso.dto';
import { UpdateAccesoDto } from './dto/update-acceso.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('accesos')
@UseGuards(JwtAuthGuard)
export class AccesosController {
  constructor(private readonly accesosService: AccesosService) {}

  @Post()
  create(@Body() createAccesoDto: CreateAccesoDto) {
    return this.accesosService.create(createAccesoDto);
  }

  @Get()
  findAll() {
    return this.accesosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accesosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAccesoDto: UpdateAccesoDto) {
    return this.accesosService.update(+id, updateAccesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accesosService.remove(+id);
  }
}
