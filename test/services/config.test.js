var expect  = require('code').expect;
var Hapi    = require('hapi');
var Lab     = require('lab');
var lab     = exports.lab = Lab.script();

lab.experiment('config', function () {

  var server;
  lab.beforeEach(function (done) {
    server = new Hapi.Server({ debug: false });
    server.connection({ port: 80 });

    server.register([
      require('../../lib/services/config')
    ], function (err) {
      if (err) { throw err; }
      done();
    });
  });

  lab.test('should expose an app nconf object', function (done) {
    expect(server.plugins.config.app.get('NODE_ENV')).to.equal(process.env.NODE_ENV);
    done();
  });
});
