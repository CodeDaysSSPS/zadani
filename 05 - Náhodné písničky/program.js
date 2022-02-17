class Song {
    constructor(_name, _author) {
        this.name = _name;
        this.author = _author;
    }
}

let originalSongs = [new Song("Cigarette Duet", "Princess Chelsea"), new Song("Jungle", "Emma Louise"), new Song("No Cry", "Fasion"), new Song("Cipher", "LEMMiNO"), new Song("After Dark", "Mr.Kitty")];

function shuffle(songs) {
    //Funkce shuffle() zkopiruje originální pole a bude dělat úpravy přímo v kopii.
    let arrayCopy = [...songs];
    //sem piš kód
}

let shuffledSongs = shuffle(originalSongs);
console.log(shuffledSongs === originalSongs);