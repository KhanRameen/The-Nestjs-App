import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { //the start function of the application
  const app = await NestFactory.create(AppModule); //Root module of the application from app.module.ts
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
