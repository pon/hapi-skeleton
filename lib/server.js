'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server({
  connections: {
    router: {
      stripTrailingSlash: true
    },
    routes: {
      json: {
        space: 4
      },
      payload: {
        maxBytes: 1073741824
      },
      cors: {
        origin: ['*'],
        credentials: true
      }
    }
  }
});

server.connection({
  host: '0.0.0.0',
  port: 3000,
  labels: ['web']
});

module.exports = server;
