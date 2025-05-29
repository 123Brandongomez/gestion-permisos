import { IsInt, IsString } from 'class-validator';

export class CreateModuloDto {
  @IsInt()
  aplicativoId: number;

  @IsString()
  Modulo: string;
}
