var winston = require('winston');
require('winston-logstash');

var host = process.argv[2];
var port = process.argv[3];

console.log('host', host);
console.log('port', port);

winston.add(winston.transports.Logstash, {
  port: 9152,
  node_name: 'yolo',
  host: host
});

winston.error('FUCKING LOGSTASH');
