import { IsInt } from 'class-validator';

export class CreatePermisoDto {
  @IsInt()
  usuarioId: number;

  @IsInt()
  rolId: number;

  @IsInt()
  rutaId: number;
}
