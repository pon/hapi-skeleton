'use strict';

var createBoomError = require('create-boom-error').bind(exports);

createBoomError('UnauthorizedUser', 401,
  'You are not authorized to access this application'
);
