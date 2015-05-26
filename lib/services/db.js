'use strict';

var path = require('path');

exports.register = function (server, options, next) {
  var appConfig = server.plugins.config.app;

  var dbConfig = require('../../db/knexfile.js')[appConfig.get('NODE_ENV')];

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
