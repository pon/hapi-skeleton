var expect  = require('code').expect;
var Lab     = require('lab');
var lab     = exports.lab = Lab.script();
var Server  = require('../lib/server');

lab.experiment('server', function () {

  lab.test('should load server without errors', function (done) {

    Server.inject({
      method: 'GET',
      url: '/test'
    }, function (res) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

