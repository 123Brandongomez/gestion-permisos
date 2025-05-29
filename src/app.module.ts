import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AccesosModule } from './accesos/accesos.module';
import { AplicativosModule } from './aplicativos/aplicativos.module';
import { ModulosModule } from './modulos/modulos.module';
import { PermisosModule } from './permisos/permisos.module';
import { RolesModule } from './roles/roles.module';
import { RutasModule } from './rutas/rutas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AccesosModule,
    AplicativosModule,
    ModulosModule,
    PermisosModule,
    RolesModule,
    RutasModule,
    UsuariosModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}