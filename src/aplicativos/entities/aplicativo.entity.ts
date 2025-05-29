import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Rol } from '../../roles/entities/role.entity';
import { Modulo } from '../../modulos/entities/modulo.entity';

@Entity('aplicativos')
export class Aplicativo {
  @PrimaryGeneratedColumn({ name: 'id_aplicativo' })
  idAplicativo: number;

  @Column({ length: 50 })
  nombre: string;

  @OneToMany(() => Usuario, usuario => usuario.aplicativo)
  usuarios: Usuario[];

  @OneToMany(() => Rol, rol => rol.aplicativo)
  roles: Rol[];

  @OneToMany(() => Modulo, modulo => modulo.aplicativo)
  modulos: Modulo[];
}
