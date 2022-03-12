import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcOptions } from './utils/grpc.options';
import { initTracing } from './utils/tracing.init';

async function bootstrap() {
  await initTracing();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcOptions,
  );
  await app.listen();
}

bootstrap();
