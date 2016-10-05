'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: 8080,
  labels: 'main'
});

server.start((err) => {
  if (err) {
    console.log(err);
  }
  console.log(server);
  console.log('Server started at: ' + server.info.uri);
});