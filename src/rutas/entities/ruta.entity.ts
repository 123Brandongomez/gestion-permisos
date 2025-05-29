import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Modulo } from '../../modulos/entities/modulo.entity';
import { Permiso } from '../../permisos/entities/permiso.entity';

@Entity('rutas')
export class Ruta {
  @PrimaryGeneratedColumn({ name: 'id_ruta' })
  idRuta: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 100 })
  url: string;

  @Column({ name: 'modulo' })
  moduloId: number;

  @ManyToOne(() => Modulo, modulo => modulo.rutas)
  @JoinColumn({ name: 'modulo' })
  modulo: Modulo;

  @OneToMany(() => Permiso, permiso => permiso.ruta)
  permisos: Permiso[];
}
