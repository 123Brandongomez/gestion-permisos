import { IsInt, IsString, Length } from 'class-validator';

export class CreateRutaDto {
  @IsString()
  @Length(1, 50)
  nombre: string;

  @IsString()
  @Length(1, 100)
  url: string;

  @IsInt()
  moduloId: number;
}
