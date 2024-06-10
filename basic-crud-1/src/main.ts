import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
     const app = await NestFactory.create(AppModule);
     const options = new DocumentBuilder()
          .setTitle('Nest REST API Starter Kit')
          .setDescription('Nest REST API Starter Kit Description')
          .setVersion('1.0')
          .addTag('onboardings')
          .addApiKey()
          .build();
     const document = SwaggerModule.createDocument(app, options);
     SwaggerModule.setup('swagger', app, document);
     app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
     await app.listen(3500);
}
bootstrap();
