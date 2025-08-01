import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin:
        process.env.NODE_ENV === 'development'
          ? true
          : process.env.CORS_ALLOWED_ORIGINS?.split(',') || [],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Content-Type, Accept',
    },
  });

  await app.listen(process.env.PORT ?? 3000);

  console.log(
    `🚀 Server running on http://localhost:${process.env.PORT ?? 3000}`,
  );
  console.log(`🌍 CORS whitelist: ${process.env.CORS_ALLOWED_ORIGINS}`);
}

bootstrap();
