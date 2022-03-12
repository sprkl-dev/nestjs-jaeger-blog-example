import { Module } from '@nestjs/common';
import { ExampleService } from './example.controller';
import { ExampleProvider } from './example.provider';

@Module({
  providers: [ExampleProvider],
  controllers: [ExampleService],
})
export class ExampleModule {}
