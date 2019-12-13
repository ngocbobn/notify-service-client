const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const config = require('./config')

var PROTO_PATH = __dirname + '/proto/notify_service.proto';
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var service = grpc.loadPackageDefinition(packageDefinition);

module.exports = new service.NotifyService(config.notifyService, grpc.credentials.createInsecure())