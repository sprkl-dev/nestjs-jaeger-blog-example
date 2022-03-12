import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Span, SpanStatusCode } from '@opentelemetry/api';
import { getTracer } from '../utils/tracing.tracer';
import { GetExampleRequest, GetExampleResponse } from './example.proto';
import { ExampleProvider } from './example.provider';

@Controller()
export class ExampleService {
  constructor(private exampleProvider: ExampleProvider) {}
  @GrpcMethod()
  getExample(req: GetExampleRequest): GetExampleResponse {
    return (
      getTracer()
        // startActiveSpan not only starts a span, but also sets the span context to be the newly opened span
        .startActiveSpan(
          'Controller ExampleService/getExample',
          (span: Span): GetExampleResponse => {
            // attributes are key value pairs that can be set on a span
            span.setAttribute('grpc.request', JSON.stringify(req));
            // status of span determines the span status
            span.setStatus({ code: SpanStatusCode.OK, message: 'all good' });
            const resp: GetExampleResponse = {
              boolData: this.exampleProvider.getExampleBool(),
              stringData: [this.exampleProvider.getExampleString()],
            };
            // every span that started must be manually closed
            span.end();
            return resp;
          },
        )
    );
  }
}
