var expect  = require('code').expect;
var Hapi    = require('hapi');
var Lab     = require('lab');
var lab     = exports.lab = Lab.script();

lab.experiment('db', function () {

  var server;
  lab.beforeEach(function (done) {
    server = new Hapi.Server({ debug: false });
    server.connection({ port: 80 });

    server.register([
      require('../../lib/services/config'),
      require('../../lib/services/db')
    ], function (err) {
      if (err) { throw err; }
      done();
    });
  });

  lab.test('should expose the relevant db objects', function (done) {

    expect(server.plugins.db.config).to.be.an.object();
    expect(server.plugins.db.knex).to.be.a.function();
    done();
  });
});
