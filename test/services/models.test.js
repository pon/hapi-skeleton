var expect  = require('code').expect;
var Hapi    = require('hapi');
var Lab     = require('lab');
var lab     = exports.lab = Lab.script();

lab.experiment('models', function () {

  var server;
  lab.beforeEach(function (done) {
    server = new Hapi.Server({ debug: false });
    server.connection({ port: 80 });

    server.register([
      require('../../lib/services/config'),
      require('../../lib/services/db'),
      require('../../lib/services/models')
    ], function (err) {
      if (err) { throw err; }
      done();
    });
  });

  lab.test('should expose the application models', function (done) {

    expect(server.plugins.bookshelf.model('User')).to.be.a.function();
    done();
  });
});
