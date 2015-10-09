var winston = require('winston');
require('winston-logstash');

var host = process.argv[2];
var port = process.argv[3];

console.log('host', host);
console.log('port', port);


// TODO ensure failure on connection error
winston.add(winston.transports.Logstash, {
  port: parseInt(port),
  node_name: 'yolo',
  host: host
});

winston.error('FUCKING LOGSTASH');
