// import the Media class:
const Media = require("./Media");
// create your Music class:
class Music {
    constructor(artist, length) {
        this.artist = artist
        this.length = length
    }
    summary() {
        return "Title: " + title + ", Artist: " + this.artist + ", Year: " + year + ", Genre: " + genre + ", Length: "+ this.length
    }
    static shortestAlbum(songs) {
        return songs.reduce((highest, music) => {
            return (highest.this.length > music.this.length) ? highest : music
        });
    }
}
// don't change below
module.exports = Music;
