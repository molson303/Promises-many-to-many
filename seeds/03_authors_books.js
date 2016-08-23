
exports.seed = function(knex, Promise) {
    return Promise.join(

      knex('authors_books').del(),

      knex('authors_books').insert({book_id: 401, author_id: 401}),
      knex('authors_books').insert({book_id: 401, author_id: 402}),
      knex('authors_books').insert({book_id: 401, author_id: 403}),
      knex('authors_books').insert({book_id: 402, author_id: 404}),
      knex('authors_books').insert({book_id: 403, author_id: 405}),
      knex('authors_books').insert({book_id: 404, author_id: 406}),
      knex('authors_books').insert({book_id: 405, author_id: 406}),
      knex('authors_books').insert({book_id: 406, author_id: 406})
    );
};
