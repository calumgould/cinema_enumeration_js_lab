const assert = require('assert');
const Film = require('../models/film.js');

describe('Film', function() {

  let film1;
  let film2;

  beforeEach(function () {
    film1 = new Film('The Martian', 'Sci-Fi', 2015, 151);
    film2 = new Film('1917', 'Historical Drama', 2020, 119);
  });

  it('should have a title', function () {
    const actual = film1.title;
    assert.strictEqual(actual, 'The Martian')
  });

  it('should have a genre', function () {
    const actual = film1.genre;
    assert.strictEqual(actual, 'Sci-Fi')
  });

  it('should have a year', function () {
    const actual = film1.year;
    assert.strictEqual(actual, 2015)
  });

  it('should have a length', function () {
    const actual = film1.length;
    assert.strictEqual(actual, 151)
  });





});
