'use strict';

var nconf = require('nconf');

exports.register = function (server, options, next) {

  var config = nconf
    .argv()
    .env({
      whitelist: [
        'NODE_ENV'
      ]
    })
    .defaults({
      port: 3000
    });

  server.expose('app', config);

  next();
};

exports.register.attributes = {
  name: 'config'
};
