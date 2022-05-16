function findAuthorById(authors, id) {
  let match = authors.find((author) => author.id === id);
  return match;
}

function findBookById(books, id) {
  let match = books.find((book) => book.id === id);
  return match;
}

function partitionBooksByBorrowedStatus(books) {
  let returned = []//true returned
  let borrowed = []//false returned
  for(let i = 0; i < books.length; i++) {
    const book = books[i].borrows
    const returnStatus = book.every((status) => status.returned === true)
    if(returnStatus === true) {
      returned.push(books[i])
    }
    else {borrowed.push(books[i])}
  }
  return [borrowed, returned]
}
//institute one of the 2 options here

function getBorrowersForBook(book, accounts) {
  let result = []
  const {borrows} = book
  for(let i = 0; i < borrows.length; i++) {
    const borrow = borrows[i]
    for(let j = 0; j < accounts.length; j++) {
      const account = accounts[j]
      if(account.id === borrow.id) {
        account.returned = borrow.returned
      }
    }
  }
  const activity = accounts.filter((account) => account.returned != null)
  return activity.slice(0,10)
}







module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
