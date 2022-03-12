import { trace, Tracer } from '@opentelemetry/api';

export const getTracer = (): Tracer => {
  return trace.getTracer('nestjs-jaeger-example');
};
