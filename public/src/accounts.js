/*function findAccountById(accounts, accountId) {
    // Iterate through the array of account objects
    for (let i = 0; i < accounts.length; i++) {
        // Check if the current account object has the matching ID
        if (accounts[i].id === accountId) {
            // Return the matching account object
            return accounts[i];
        }
    }
    // If no match is found, return null or handle accordingly
    return null;
}*/
/*function findAccountById(accounts, accountId) {
    // Iterate through the array of account objects
    for (let i in accounts) {
        // Check if the current account object has the matching ID
        if (accounts[i].id === accountId) {
            // Return the matching account object
            return accounts[i];
        }
    }
    return null;
};*/
const findAccountById = (accounts, accountId) =>
    accounts.find(account => account.id === accountId) || null;


/*function sortAccountsByLastName(accounts) {
    return accounts.sort((account1, account2) => {
        // Extract last names for comparison
        const lastName1 = account1.name.last.toLowerCase();
        const lastName2 = account2.name.last.toLowerCase();
        // Compare last names
        if (lastName1 < lastName2) {
            return -1;
        } else if (lastName1 > lastName2) {
            return 1;
        } else {
            // If last names are equal, compare by first name for stability
            const firstName1 = account1.name.first.toLowerCase();
            const firstName2 = account2.name.first.toLowerCase();
            return firstName1.localeCompare(firstName2);
        }
    });
}*/
const sortAccountsByLastName = accounts =>
  accounts.sort((a, b) => (a.name.last.toLowerCase() === b.name.last.toLowerCase())
    ? a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase())
    : a.name.last.toLowerCase().localeCompare(b.name.last.toLowerCase())
  );

/*function getTotalNumberOfBorrows(account, books) {
  return books.reduce(function(totalBorrows, book) {
    return totalBorrows + book.borrows.filter(function(borrow) {
      return borrow.id === account.id;
    }).length;
  }, 0);
}*/
const getTotalNumberOfBorrows = (account, books) =>
  books.reduce((totalBorrows, book) =>
    totalBorrows + book.borrows.filter(borrow => borrow.id === account.id).length,
    0
  );

/*function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(book =>
      book.borrows.some(borrow =>
        borrow.id === account.id && !borrow.returned
      )
    )
    .map(book => ({
      ...book,
      author: authors.find(author => author.id === book.authorId),
    }));
};*/
const getBooksPossessedByAccount = (account, books, authors) =>
  books
    .filter(book =>
      book.borrows.some(borrow =>
        borrow.id === account.id && !borrow.returned
      )
    )
    .map(book => ({
      ...book,
      author: authors.find(author => author.id === book.authorId),
    }));

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
