// import the Media class:
const Media = require("./Media");
// create your Movie class:
class Movie {
    constructor(director, rating, duration) {
        this.director = director
        this.rating = rating
        this.duration = duration
    }
    summary() {
        return "Title: " + title + ", Director: " + this.director + ", Year: " + year + ", Genre: " + genre + ", Duration: "+ this.duration + ", Rating: " + this.rating
    }
    static longestMovie(movies) {
        return movies.reduce((highest, movie) => {
            return (highest.this.duration > book.this.duration) ? highest : movie
        });
    }
}
// don't change below
module.exports = Movie;