import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RestModule } from './infrastructure/rest/rest.module';

async function bootstrap() {
  const app = await NestFactory.create(RestModule);
  const config = new DocumentBuilder()
      .setTitle('LiteFarm v2')
      .setDescription('Litefarm backend revamped')
      .setVersion('2.0')
      .addTag('litefarm')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001); // TODO: put the port in the env file
}
bootstrap();
