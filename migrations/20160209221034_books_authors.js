
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors_books', function (t) {
    t.increments();
    t.integer('book_id');
    t.integer('author_id');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors_books');
};
