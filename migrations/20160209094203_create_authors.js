
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function (t) {
    t.increments();
    t.string('first_name');
    t.string('last_name');
    t.text('biography');
    t.string('portrait_url');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
