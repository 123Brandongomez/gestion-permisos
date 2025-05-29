import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aplicativo } from './entities/aplicativo.entity';
import { AplicativosService } from './aplicativos.service';
import { AplicativosController } from './aplicativos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Aplicativo])],
  controllers: [AplicativosController],
  providers: [AplicativosService],
})
export class AplicativosModule {}
