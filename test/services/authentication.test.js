var expect  = require('code').expect;
var Hapi    = require('hapi');
var Lab     = require('lab');
var lab     = exports.lab = Lab.script();

lab.experiment('authentication', function () {

  var server;
  lab.beforeEach(function (done) {
    server = new Hapi.Server({ debug: false });
    server.connection({ port: 80 });

    server.register([
      require('../../lib/services/errors'),
      require('../../lib/services/config'),
      require('../../lib/services/db'),
      require('../../lib/services/models'),
      require('../../lib/services/authentication')
    ], function (err) {
      if (err) { throw err; }
      done();
    });
  });

  lab.experiment('validate', function () {

    lab.test('should return valid credentials for good api key', function (done) {

      server.plugins.authentication.validate('api_key', null, function (err, valid, credentials) {
        expect(err).to.be.null();
        expect(valid).to.be.true();
        expect(credentials.api_key).to.equal('api_key');
        done();
      });
    });

    lab.test('should reject for a bad api key', function (done) {

      server.plugins.authentication.validate('asdf', null, function (err, valid) {
        expect(err).to.be.an.instanceof(server.plugins.errors.api.UnauthorizedUser);
        done();
      });
    });
  });
});
