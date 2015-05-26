'use strict';

exports.register = function (server, options, next) {

  var User = server.plugins.bookshelf.model('User');

  server.register(require('hapi-auth-basic'), function (err) {
    // $lab:coverage:off$
    if (err) { throw err; }
    // $lab:coverage:on$
  });

   server.method('authentication.validate', function (username, password, callback) {
    return new User({ api_key: username })
    .fetch({ require: true })
    .then(function (user) {
      callback(null, true, user.toJSON());
    })
    .catch(function (err) {
      callback(new server.plugins.errors.api.UnauthorizedUser(), false);
    });
  });

  server.auth.strategy('basic', 'basic', true, {
    validateFunc: server.methods.authentication.validate
  });

  next();
};

exports.register.attributes = {
  name: 'authentication',
  dependencies: 'models'
};
