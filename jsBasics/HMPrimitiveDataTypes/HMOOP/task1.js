import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Harry Potter', 'Rowling', 1997);
const book2 = new Book('Hobbit', 'Tolkien', 1937);

const ebook1 = new EBook('Clean Code', 'Martin', 2008, 'pdf');

book1.printInfo();
ebook1.printInfo();

// массив книг (и Book и EBook)
const books = [book1, book2, ebook1];

const oldest = Book.getOldestBook(books);
console.log('Oldest book:');
oldest.printInfo();

// создать ebook из обычной книги
const ebookFromBook = EBook.fromBook(book2, 'epub');
console.log('EBook from Book:');
ebookFromBook.printInfo();
