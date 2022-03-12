import { Injectable } from '@nestjs/common';
import { getTracer } from 'src/utils/tracing.tracer';

@Injectable()
export class ExampleProvider {
  getExampleString(): string {
    const span = getTracer().startSpan(
      'Provider ExampleProvider/getExampleString',
    );
    const result = 'example string';
    span.end();
    return result;
  }
  getExampleBool(): boolean {
    const span = getTracer().startSpan(
      'Provider ExampleProvider/getExampleBool',
    );
    const result = true;
    span.end();
    return result;
  }
}
