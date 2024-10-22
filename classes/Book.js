// import the Media class:
const Media = require("./Media");
// create your Book class:
class Book extends Media {
    constructor(author, numPages, rating) {
        this.author = author
        this.numPages = numPages
        this.rating = rating
    }
    summary() {
        return "Title: " + title + ", Author: " + this.author + ", Year: " + year + ", Page Count: " + this.numPages + ", Genre: " + genre + ", Rating: " + this.rating
    }
    static highestRating(books) {
        return books.reduce((highest, book) => {
            return (highest.rating > book.rating) ? highest : book
        });
    }
}
// don't change below
module.exports = Book;
