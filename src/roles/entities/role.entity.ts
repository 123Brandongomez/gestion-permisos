import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Aplicativo } from '../../aplicativos/entities/aplicativo.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Permiso } from '../../permisos/entities/permiso.entity';

@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  idRol: number;

  @Column({ length: 20 })
  nombre: string;

  @Column({ name: 'aplicativo' })
  aplicativoId: number;

  @ManyToOne(() => Aplicativo, aplicativo => aplicativo.roles)
  @JoinColumn({ name: 'aplicativo' })
  aplicativo: Aplicativo;

  @OneToMany(() => Usuario, usuario => usuario.rolRelacion)
  usuarios: Usuario[];

  @OneToMany(() => Permiso, permiso => permiso.rol)
  permisos: Permiso[];
}
