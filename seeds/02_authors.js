var biography = "Alex Martelli spent 8 years with IBM Research, winning three "+
"Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software "+
"Consultant at think3 inc, developing libraries, network protocols, GUI engines, "+
"event frameworks, and web access frontends. He has also taught programming "+
"languages, development methods, and numerical computing at Ferrara University "+
"and other venues. He's a C++ MVP for Brainbench, and a member of the Python "+
"Software Foundation. He currently works for AB Strakt, a Python-centered "+
"software house in Göteborg, Sweden, mostly by telecommuting from his home "+
"in Bologna, Italy. Alex's proudest achievement is the articles that appeared "+
"in Bridge World (January/February 2000), which were hailed as giant steps "+
"towards solving issues that had haunted contract bridge theoreticians for decades.";
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('authors').del(),

    knex('authors').insert({id: 401, first_name: 'Alex', last_name: 'Martelli', biography: biography, portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg'}),
    knex('authors').insert({id: 402, first_name: 'Anna Martelli', last_name: 'Ravenscroft', biography: biography, portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg'}),
    knex('authors').insert({id: 403, first_name: 'Steve', last_name: 'Holden', biography: biography, portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg'}),
    knex('authors').insert({id: 404, first_name: 'Alan B.', last_name: 'Downey', biography: biography, portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'}),
    knex('authors').insert({id: 405, first_name: 'Bonnie', last_name: 'Eisenman', biography: biography, portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg'}),
    knex('authors').insert({id: 406, first_name: 'Kyle', last_name: 'Simpson', biography: biography, portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg'})
  );
};
