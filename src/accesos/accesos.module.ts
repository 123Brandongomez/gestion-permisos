import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesosService } from './accesos.service';
import { AccesosController } from './accesos.controller';
import { Acceso } from './entities/acceso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Acceso])],
  controllers: [AccesosController],
  providers: [AccesosService],
})
export class AccesosModule {}
