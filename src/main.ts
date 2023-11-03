import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RestModule } from './infrastructure/rest/rest.module';

async function bootstrap() {
  const app = await NestFactory.create(RestModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
      .setTitle('LiteFarm v2')
      .setDescription('Litefarm backend revamps')
      .setVersion('2.0')
      .addTag('litefarm')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001); // TODO: put the port in the env file
}
bootstrap();
