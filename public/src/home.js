/*function getTotalBooksCount(books) {
  return books.length;
}*/
const getTotalBooksCount = books => books.length;

/*function getTotalAccountsCount(accounts) {
  return accounts.length;
}*/
const getTotalAccountsCount = accounts => accounts.length;

/*function getBooksBorrowedCount(books) {
  return books.filter(book => !book.borrows[0].returned).length;
}*/
const getBooksBorrowedCount = books => books.filter(book => !book.borrows[0].returned).length;

/*function getMostCommonGenres(books) {
    const genreCounts = books.reduce(function (accumulator, book) {
        const genre = book.genre;
        accumulator[genre] = (accumulator[genre] || 0) + 1;
        return accumulator;
    }, {});
    const sortedGenres = Object.entries(genreCounts)
        .sort(function (entryA, entryB) {
            const countA = entryA[1];
            const countB = entryB[1];
            return countB - countA;
        })
        .slice(0, 5)
        .map(function (entry) {
            const name = entry[0];
            const count = entry[1];
            return { name, count };
        });
    return sortedGenres;
}*/
const getMostCommonGenres = books => {
    const genreCounts = books.reduce((accumulator, book) => {
        const genre = book.genre;
        accumulator[genre] = (accumulator[genre] || 0) + 1;
        return accumulator;
    }, {});
    const sortedGenres = Object.entries(genreCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }));
    return sortedGenres;
};

/*function getMostPopularBooks(books) {
  const popularBooks = books
      .map(book => ({name: book.title, count: book.borrows.length}))
      .sort((a,b) => b.count - a.count)
      .slice(0, 5);
  return popularBooks;
}*/      
const getMostPopularBooks = books =>
  books
      .map(book => ({ name: book.title, count: book.borrows.length }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

/*function getMostPopularAuthors(books, authors) {
    const authorBorrowCounts = authors.map(author => {
        const authorBooks = books.filter(book => book.authorId === author.id);
        const authorBorrows = authorBooks.reduce((totalBorrows, book) => totalBorrows + book.borrows.length, 0);
        return { name: `${author.name.first} ${author.name.last}`, count: authorBorrows };
    });
    const sortedAuthors = authorBorrowCounts
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    return sortedAuthors;
}*/
const getMostPopularAuthors = (books, authors) => {
    const authorBorrowCounts = authors.map(author => {
        const authorBooks = books.filter(book => book.authorId === author.id);
        const authorBorrows = authorBooks.reduce((totalBorrows, book) => totalBorrows + book.borrows.length, 0);
        return { name: `${author.name.first} ${author.name.last}`, count: authorBorrows };
    });
    const sortedAuthors = authorBorrowCounts
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    return sortedAuthors;
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
