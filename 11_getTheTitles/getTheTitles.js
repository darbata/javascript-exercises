const getTheTitles = function(books) {
  num = books.length;
  let arr = new Array(num);

  for (let i = 0; i < num; i++) {
    arr[i] = books[i].title;
  }

  return arr;
};
//const books = [
//  {
//    title: 'Book',
//    author: 'Name'
//  },
//  {
//    title: 'Book2',
//    author: 'Name2'
//  }
//]
//
//console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
