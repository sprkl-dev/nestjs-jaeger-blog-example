const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const protoPath = path.join(
  __dirname,
  '..',
  'proto',
  'example',
  'v1',
  'example.proto',
);
const packageDefinition = protoLoader.loadSync(protoPath);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const examplePackage = protoDescriptor['example']['v1'];

const exampleServiceClient = new examplePackage.ExampleService(
  'localhost:3000',
  grpc.credentials.createInsecure(),
);

exampleServiceClient.getExample({ integerData: 123 }, (err, resp) => {
  if (err) {
    throw Error(err);
  } else {
    console.log(JSON.stringify(resp));
  }
});
