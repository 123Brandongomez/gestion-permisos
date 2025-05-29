import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('accesos')
export class Acceso {
  @PrimaryGeneratedColumn({ name: 'id_acceso' })
  idAcceso: number;

  @Column({ length: 200 })
  token: string;

  @Column()
  usuario: number;

  @Column({ type: 'date' })
  fecha_ingreso: Date;

  @Column({ type: 'date', nullable: true })
  fecha_salida: Date;

  @Column({ type: 'simple-array' })
  estado: string[];

  @ManyToOne(() => Usuario, usuario => usuario.accesos)
  @JoinColumn({ name: 'usuario' })
  usuarioRelacion: Usuario;
}
