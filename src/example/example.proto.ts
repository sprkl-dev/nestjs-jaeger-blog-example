import * as path from 'path';

export interface GetExampleRequest {
  integerData: number;
}

export interface GetExampleResponse {
  stringData: string[];
  boolData: boolean;
}

export const EXAMPLE_PACKAGE = 'example.v1';
export const EXAMPLE_REL_PROTO_PATH = path.join(
  'example',
  'v1',
  'example.proto',
);
