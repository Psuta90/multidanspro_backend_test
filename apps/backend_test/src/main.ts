import { NestFactory } from '@nestjs/core';
import { BackendTestModule } from './backend_test.module';

async function bootstrap() {
  const app = await NestFactory.create(BackendTestModule);
  await app.listen(3000);
}
bootstrap();
