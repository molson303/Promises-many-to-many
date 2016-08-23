
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (t) {
    t.increments();
    t.string('title');
    t.string('genre');
    t.text('description');
    t.string('cover_url');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
