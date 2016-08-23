var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Promise = require('bluebird');
var helpers = require('../lib/helpers');

function Authors() {
  return knex('authors');
}

function Books() {
  return knex('books');
}

function Authors_Books() {
  return knex('authors_books');
}


router.get('/', function(req, res, next) {
  // get all authors from Authors
  // THEN for each author, go get all of their book ids from Authors_Books
  // THEN go get all that author's books
  // AND add the array of books to the author object as 'books'
  // render the appropriate template
  // pass an array of authors to the view using locals
  // your author objects should look like this:
    // EXAMPLE: { first_name: 'Laura', last_name: 'Lou', bio: 'her bio', books: [ this should be all of her book objects ]}
});

router.get('/new', function(req, res, next) {
  Books().select().then(function (books) {
    res.render('authors/new', {books: books});
  })
});

router.post('/', function (req, res, next) {
  var bookIds = req.body.book_ids.split(",");
  delete req.body.book_ids;
  Authors().returning('id').insert(req.body).then(function (id) {
    helpers.insertIntoAuthorsBooks(bookIds, Authors_Books, id[0]).then(function () {
      res.redirect('/authors');
    })
  })
});

router.get('/:id/delete', function (req, res, next) {
  Authors().where('id', req.params.id).first().then(function (author) {
    helpers.getAuthorBooks(author).then(function (authorBooks) {
      Books().select().then(function (books) {
        res.render('authors/delete', {author: author, author_books: authorBooks, books: books });
      })
    })
  })
})

router.post('/:id/delete', function (req, res, next) {
  Promise.all([
    Authors().where('id', req.params.id).del(),
    Authors_Books().where('author_id', req.params.id).del()
  ]).then(function (results) {
    res.redirect('/authors')
  })
})

router.get('/:id/edit', function (req, res, next) {
  // find the author in Authors
  // get all of the authors book_ids from Authors_Books
  // get all of the authors books from BOOKs
  // render the corresponding template
  // use locals to pass books, author, and author_books to the view
  // CHECK YOU WORK by visiting /authors/406/edit
})

router.post('/:id', function (req, res, next) {
  var bookIds = req.body.book_ids.split(",");
  delete req.body.book_ids;
  Authors().returning('id').where('id', req.params.id).update(req.body).then(function (id) {
    id = id[0];
    helpers.insertIntoAuthorsBooks(bookIds, id).then(function () {
    res.redirect('/authors');
    });
  })
})

router.get('/:id', function (req, res, next) {
  // find the author in Authors
  // get all of the authors book_ids from Authors_Books
  // get all of the authors books from BOOKs
  // render the corresponding template
  // use locals to pass books and author to the view
  // CHECK YOU WORK by visiting /authors/406
})

module.exports = router;
