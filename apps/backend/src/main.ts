import { ValidationPipe } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // TODO enable cors for only client origin (but no trace in free render)
  // const configService = app.get<ConfigService>(ConfigService);
  // app.enableCors({
  //   origin: [configService.get<string>('CLIENT_ORIGIN')],
  // });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
