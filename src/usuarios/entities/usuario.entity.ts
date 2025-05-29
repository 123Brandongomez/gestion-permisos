import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Aplicativo } from '../../aplicativos/entities/aplicativo.entity';
import { Rol } from '../../roles/entities/role.entity';
import { Permiso } from '../../permisos/entities/permiso.entity';
import { Acceso } from '../../accesos/entities/acceso.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  idUsuario: number;

  @Column({ length: 30 })
  login: string;

  @Column({ length: 20 })
  password: string;

  @Column()
  persona: number;

  @Column({ name: 'aplicativo', nullable: true })
  aplicativoId?: number;

  @Column({ name: 'rol', nullable: true })
  rolId?: number;
  
  @ManyToOne(() => Aplicativo, (aplicativo) => aplicativo.usuarios, {
    nullable: true,
  })

  @JoinColumn({ name: 'aplicativo' })
  aplicativo?: Aplicativo;

  @ManyToOne(() => Rol, (rol) => rol.usuarios, { nullable: true })
  @JoinColumn({ name: 'rol' })
  rolRelacion?: Rol;

  @OneToMany(() => Permiso, (permiso) => permiso.usuario)
  permisos: Permiso[];

  @OneToMany(() => Acceso, (acceso) => acceso.usuario)
  accesos: Acceso[];
}
