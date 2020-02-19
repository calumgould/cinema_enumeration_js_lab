const Cinema = function (filmCollection) {
  this.filmCollection = filmCollection;
}

Cinema.prototype.allFilmTitles = function () {
  return this.filmCollection.map((film) => {
    return film.title;
  });
}

Cinema.prototype.findFilmByTitle = function (title) {
  return this.filmCollection.filter((film) => {
    return film.title === title;
  });
}

Cinema.prototype.findFilmsByGenre = function (genre) {
  return this.filmCollection.filter((film) => {
    return film.genre === genre;
  });
}

Cinema.prototype.filmsFromYear = function (year) {
  return this.filmCollection.some((film) => {
    return film.year === year;
  });
}

Cinema.prototype.allFilmsOverLength = function (length) {
  return this.filmCollection.every((film) => {
    return film.length > length
  });
}

Cinema.prototype.calculateTotalRunningTime = function () {
  return this.filmCollection.reduce((runningTotal, film) => {
    return runningTotal += film.length;
  }, 0);
};


module.exports = Cinema;
