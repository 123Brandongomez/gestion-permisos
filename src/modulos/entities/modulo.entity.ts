import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Aplicativo } from '../../aplicativos/entities/aplicativo.entity';
import { Ruta } from '../../rutas/entities/ruta.entity';

@Entity('modulos')
export class Modulo {
  @PrimaryGeneratedColumn({ name: 'id_modulo' })
  idModulo: number;

  @Column({ name: 'aplicativo' })
  aplicativoId: number;

  @Column({ length: 50 })
  Modulo: string;

  @ManyToOne(() => Aplicativo, aplicativo => aplicativo.modulos)
  @JoinColumn({ name: 'aplicativo' })
  aplicativo: Aplicativo;

  @OneToMany(() => Ruta, ruta => ruta.modulo)
  rutas: Ruta[];
}
