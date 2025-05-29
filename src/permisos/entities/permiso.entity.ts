import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Rol } from '../../roles/entities/role.entity';
import { Ruta } from '../../rutas/entities/ruta.entity';

@Entity('permisos')
export class Permiso {
  @PrimaryGeneratedColumn({ name: 'id_permiso' })
  idPermiso: number;

  @Column({ name: 'usuario' })
  usuarioId: number;

  @Column({ name: 'rol' })
  rolId: number;

  @Column({ name: 'ruta' })
  rutaId: number;

  @ManyToOne(() => Usuario, usuario => usuario.permisos)
  @JoinColumn({ name: 'usuario' })
  usuario: Usuario;

  @ManyToOne(() => Rol, rol => rol.permisos)
  @JoinColumn({ name: 'rol' })
  rol: Rol;

  @ManyToOne(() => Ruta)
  @JoinColumn({ name: 'ruta' })
  ruta: Ruta;
}
