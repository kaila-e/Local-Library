function findAccountById(accounts, id) {
  let accountById = accounts.find((account) => account.id === id);
  return accountById;
}

function sortAccountsByLastName(accounts) {
  let lastNameOrder = accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > 
  accountB.name.last.toLowerCase() ? 1: -1
  );
  return lastNameOrder;
}

function getTotalNumberOfBorrows(account, books) {
  // used the reduce() method to accumulate the total number of books borrowed
  return books.reduce((total, book) => {
    const idCount = book.borrows.filter(borrow => borrow.id === account.id).length;
    return total + idCount;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const inPossession = [];
    books.map((book) => {
      book.borrows.map((borrow) => {
        authors.map((author) => {
          if (author.id === book.authorId) book["author"] = author;
        });
          if (!borrow.returned && borrow.id === account.id) {
            inPossession.push(book);
          }
      });
    });
  return inPossession;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};