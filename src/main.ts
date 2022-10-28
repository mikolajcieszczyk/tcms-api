import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH'],
  });
  await app.listen(process.env.PORT);
}
bootstrap();
