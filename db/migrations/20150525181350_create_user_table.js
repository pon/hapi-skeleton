
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('api_key', 20);
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
