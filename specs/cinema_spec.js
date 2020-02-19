const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let cinema;
  let film1;
  let film2;
  let films;

  beforeEach(function () {
    film1 = new Film('The Martian', 'Sci-Fi', 2015, 151);
    film2 = new Film('1917', 'Historical Drama', 2020, 119);
    film3 = new Film('The Martix', 'Sci-Fi', 1999, 136);
    films = [film1, film2, film3];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.filmCollection;
    assert.strictEqual(actual, films);
  });

  it('should list all film titles', function () {
    const actual = cinema.allFilmTitles();
    assert.deepStrictEqual(actual, [film1.title, film2.title, film3.title]);
  });

  it('should find film by title', function () {
    const actual = cinema.findFilmByTitle('The Martian');
    assert.deepStrictEqual(actual, [film1]);
  });

  it('should find all films by genre', function () {
    const actual = cinema.findFilmsByGenre('Sci-Fi');
    assert.deepStrictEqual(actual, [film1, film3]);
  });

  it('should find film from year - true', function () {
    const actual = cinema.filmsFromYear(2020);
    assert.strictEqual(actual, true)
  });

  it('should find film from year - false', function () {
    const actual = cinema.filmsFromYear(2018);
    assert.strictEqual(actual, false);
  });

  it('all films are over length - true', function () {
    const actual = cinema.allFilmsOverLength(100);
    assert.strictEqual(actual, true);
  });

  it('all films are over length - false', function () {
    const actual = cinema.allFilmsOverLength(130);
    assert.strictEqual(actual, false);
  });

  it('should return total running time of all films', function () {
    const actual = cinema.calculateTotalRunningTime();
    assert.strictEqual(actual, 406)
  })








});
