import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruta } from './entities/ruta.entity';
import { RutasService } from './rutas.service';
import { RutasController } from './rutas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ruta])],
  controllers: [RutasController],
  providers: [RutasService],
})
export class RutasModule {}
