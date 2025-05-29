import { IsInt, IsString, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @Length(1, 30)
  login: string;

  @IsString()
  @Length(1, 20)
  password: string;

  @IsInt()
  persona: number;

  @IsInt()
  aplicativoId?: number;

  @IsInt()
  rolId?: number;

}
