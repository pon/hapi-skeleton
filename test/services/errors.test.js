var expect  = require('code').expect;
var Hapi    = require('hapi');
var Lab     = require('lab');
var lab     = exports.lab = Lab.script();

lab.experiment('errors', function () {

  var server;
  lab.beforeEach(function (done) {
    server = new Hapi.Server({ debug: false });
    server.connection({ port: 80 });

    server.register([
      require('../../lib/services/errors')
    ], function (err) {
      if (err) { throw err; }
      done();
    });
  });

  lab.test('should expose api errors', function (done) {
    expect(server.plugins.errors.api).to.be.an.object();
    done();
  });
});
