import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolDto } from './dto/create-role.dto';
import { UpdateRolDto } from './dto/update-role.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('roles')
@UseGuards(JwtAuthGuard)

export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRolDto) {
    return this.rolesService.create(dto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRolDto) {
    return this.rolesService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
