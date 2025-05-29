import { IsString, IsInt, IsDateString, IsOptional, IsArray } from 'class-validator';

export class CreateAccesoDto {
  @IsString()
  token: string;

  @IsInt()
  usuario: number;

  @IsDateString()
  fecha_ingreso: Date;

  @IsOptional()
  @IsDateString()
  fecha_salida?: Date;

  @IsArray()
  @IsString({ each: true })
  estado: string[];
}
