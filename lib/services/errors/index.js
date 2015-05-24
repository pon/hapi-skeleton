'use strict';

exports.register = function (server, options, next) {

  server.expose('api', require('./api'));

  next();
};

exports.register.attributes = {
  name: 'errors'
};
