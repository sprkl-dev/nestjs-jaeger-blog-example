import { GrpcOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import {
  EXAMPLE_PACKAGE,
  EXAMPLE_REL_PROTO_PATH,
} from '../example/example.proto';

export const PROTO_MODULE_PATH = path.join(__dirname, '..', '..', 'proto');

export const grpcOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: [EXAMPLE_PACKAGE],
    protoPath: path.join(PROTO_MODULE_PATH, EXAMPLE_REL_PROTO_PATH),
    url: 'localhost:3000',
  },
};
