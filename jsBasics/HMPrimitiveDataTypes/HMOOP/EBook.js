import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  printInfo() {
    console.log(
      this.title +
        ' - ' +
        this.author +
        ' (' +
        this.year +
        ') [' +
        this.format +
        ']',
    );
  }

  //создать EBook из Book
  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}
