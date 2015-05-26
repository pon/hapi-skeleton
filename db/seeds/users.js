var crypto = require('crypto');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, name: 'Peter', api_key: crypto.randomBytes(20).toString('hex')}),
    knex('users').insert({id: 2, name: 'John', api_key: crypto.randomBytes(20).toString('hex')}),
    knex('users').insert({id: 3, name: 'Alice', api_key: crypto.randomBytes(20).toString('hex')}),
    knex('users').insert({id: 4, name: 'Test', api_key: 'api_key'})
  );
};
