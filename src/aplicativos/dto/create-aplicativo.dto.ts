import { IsString } from 'class-validator';

export class CreateAplicativoDto {
  @IsString()
  nombre: string;
}
