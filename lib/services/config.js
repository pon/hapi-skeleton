'use strict';

var nconf = require('nconf');
var path  = require('path');

exports.register = function (server, options, next) {

  var config = nconf
    .argv()
    .env({
      whitelist: [
        'NODE_ENV'
      ]
    })
    .defaults({
      port: 3000,
      dbfile: path.join(__dirname + '/../../db/db.sqlite')
    });

  server.expose('app', config);

  next();
};

exports.register.attributes = {
  name: 'config'
};
