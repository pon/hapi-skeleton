'use strict';

var path = require('path');

exports.register = function (server, options, next) {
  var appConfig = server.plugins.config.app;

  var dbConfig = {
    client: 'sqlite3',
    connection: {
      filename: appConfig.get('dbfile')
    },
    migrations: {
      directory: path.join(__dirname + '/../../db/migrations'),
      tableName: 'migrations'
    }
  };

  var knex = require('knex')(dbConfig);
  var bookshelf = require('bookshelf')(knex);

  bookshelf.plugin('virtuals');

  server.expose('config', dbConfig);
  server.expose('knex', knex);

  next();
};

exports.register.attributes = {
  name: 'db',
  dependencies: 'config'
};
