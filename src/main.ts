import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from 'winston-logger.config';
import helmet from 'helmet';
import { VersioningType } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig)

  });

  app.setGlobalPrefix('api')
  app.enableVersioning({type:VersioningType.URI})
  app.enableCors({
    origin: ['http://localhost:5173', 'https://accounts.google.com'],
   // credentials: true,
  });
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: false,
  //   })
  // );
  app.use((req, res, next) => {
    res.removeHeader('Cross-Origin-Opener-Policy');
    res.removeHeader('Cross-Origin-Embedder-Policy');
    next();
  });

  const config = new DocumentBuilder()
    .setTitle('Medium Clone')
    .setDescription('Different APIs of medium clone')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Users')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
