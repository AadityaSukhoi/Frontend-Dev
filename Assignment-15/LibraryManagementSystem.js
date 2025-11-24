class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }
    issueBook() {
        this.isIssued = true;
    }
    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("Book A", "Author 1", "111"),
    new Book("Book B", "Author 2", "222"),
    new Book("Book C", "Author 3", "333")
];

function getAvailableBooks() {
    return books.filter(b => !b.isIssued);
}

function issueByISBN(code) {
    const book = books.find(b => b.isbn === code);
    if (book && !book.isIssued) book.issueBook();
    return book;
}
