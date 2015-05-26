'use strict';

var path      = require('path');

exports.register = function (server, options, next) {

  server.register({
    register: require('hapi-bookshelf-models'),
    options: {
      knex: server.plugins.db.config,
      plugins: ['registry'],
      models: path.join(__dirname + '/models')
    }
  }, function (err) {
    // $lab:coverage:off$
    if (err) { throw err; }
    // $lab:coverage:on$
  });
  next();
};

exports.register.attributes = {
  name: 'models',
  dependencies: 'db'
};
