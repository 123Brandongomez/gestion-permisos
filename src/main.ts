import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar prefijo global para todas las rutas
  app.setGlobalPrefix('api');

  // Configurar CORS
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Nota: La validación global ya está configurada en app.module.ts
  // usando APP_PIPE, así que no es necesario configurarla aquí también

  console.log(`Aplicación iniciada en el puerto ${process.env.PORT || 3000}`);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();