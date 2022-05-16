function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
    books.map((book) => {
      book.borrows.map((borrow) => {
        if (!borrow.returned) {
          count++;
        }
      });
    });
    return count;
}

function _helperSort(obj) {
  let key = Object.keys(obj)
  // look at mod 9 (sort); the -1 / 1 part, will have at least 3 if situations for the following 3 functions
  // if
}

function getMostCommonGenres(books) {
  let genres = books.reduce((acc, book) => {
    acc[book.genre] !=null ? acc[book.genre].count++ : acc[book.genre] = {
      name: book.genre, count: 1 }
      return acc
    }, {});
    let sortedValues = _helperSort()
    return sortedValues.map (genre => genres[genre]).sort((a, b) =>
    b.count - a.count).slice(0,5)
}
  
function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((bookA, bookB) => bookB.count - bookA.count).splice(0,5)
}

function getMostPopularAuthors(books, authors) {
    const booksByAuthorAndBorrows = books.map((book) => {
      const { authorId, borrows } = book;
      return { name: authorId, count: borrows.length };
    });
  
    const authorName = authors.map((author) =>
      booksByAuthorAndBorrows.find((item) => {
        if (item.name === author.id) {
          item.name = `${author.name.first} ${author.name.last}`;
          return author;
        }
      })
    );
  
    const mostPopularAuthors = authorName.sort(
      (authorA, authorB) => authorB.count - authorA.count
    );
  
    return mostPopularAuthors.slice(0, 5);
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
