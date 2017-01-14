module.exports = function findBooksInFavouriteLibraries(term) {
  if (!term) {
    console.log('No search term!')
    process.exit()
  }

  console.log('Loading...')

  const search = require('./search')
  const book = require('./book')

  const logAndPassThrough = message => d => {
    console.log(message)
    console.log(d)
    return d
  }

  return search
    .byTitle(term)
    .then(search.matchExactTitle(term))
    .then(book.getAvailability)
    .then(book.inFavouriteLibraries)
    .then(book.isOnShelf)
    .then(book.byUrl)
}
