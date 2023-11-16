function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    return album;
}
var album1 = makeAlbum("Lata Mangeshkar  ", " Nightingale of India  ");
var album2 = makeAlbum("Ravi Shankar  ", " Sitar Maestro ", 12);
var album3 = makeAlbum("A.R. Rahman", " Mozart of Madras");
console.log(album1);
console.log(album2);
console.log(album3);
