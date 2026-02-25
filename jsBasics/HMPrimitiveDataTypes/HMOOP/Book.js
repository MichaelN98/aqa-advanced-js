export default class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(this.title + " - " + this.author + " (" + this.year + ")");
  }

  //найти самую старую книгу
  static getOldestBook(books) {
    let oldest = books[0];

    for (let i = 1; i < books.length; i++) {
      if (books[i].year < oldest.year) {
        oldest = books[i];
      }
    }

    return oldest;
  }
}
