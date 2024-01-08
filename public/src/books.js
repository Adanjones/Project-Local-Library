/*function findAuthorById(authors, authorId) {
    return authors.find(author => author.id === authorId);
};*/
const findAuthorById = (authors, authorId) =>
    authors.find(author => author.id === authorId);

/*function findBookById(books, bookId) {
  return books.find(book => book.id === bookId);
};*/
const findBookById = (books, bookId) => books.find(book => book.id === bookId);

/*function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);
  return [checkedOutBooks, returnedBooks];
};*/
const partitionBooksByBorrowedStatus = books => {
  const checkedOutBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);
  return [checkedOutBooks, returnedBooks];
};

/*function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
     const account = accounts.find(account => account.id === borrow.id);
     return { ...account, returned: borrow.returned };
  }).slice(0, 10);
}*/
const getBorrowersForBook = (book, accounts) => 
  book.borrows.map(borrow => ({ 
    ...accounts.find(account => account.id === borrow.id), 
    returned: borrow.returned,
})).slice(0, 10);

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
