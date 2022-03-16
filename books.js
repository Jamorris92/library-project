function findAuthorById(authors, id) {
  let authorInfo = authors.find((author) => (author.id === id));
  return authorInfo;
}

function findBookById(books, id) {
  let bookInfo = books.find((book) => (book.id === id));
  return bookInfo;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedArray = books.filter((book)=> !book.borrows[0].returned);
  const returnedArray = books.filter((book)=> book.borrows[0].returned);
  let partitionedArray = [borrowedArray, returnedArray];
  return partitionedArray;
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
accounts.map((account)=>{
 book.borrows.find((borrow)=>
 {
   if(borrow.id === account.id)
     {
        account["returned"] = borrow.returned
        borrowers.push(account)
     }

 })
 })
return borrowers.splice(0, 10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
