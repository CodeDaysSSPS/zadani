Tvůj kolega Kryštof v pátek odcházel pozdě z práce a těsně před odchodem na GitHub pushnul verzi kódu, která rozbila značnou část vaší hudební streamovací platformy Spedle Music. Úplně přestal fungovat systém pouštění náhodných písniček. Stejně ale byla tato část kódu velmi stará, takže přepracování funkčnosti není úplně od věci.

Dostaneš pole s písničkami a tvým úkolem je vrátit pole o stejné délce a se stejným počtem položek. Jediný rozdíl mezi originálním polem a tvým polem bude pořadí, ve kterém jsou písničky uspořádány.


> Příklad
````
Songs: [
  Song { name: 'Cigarette Duet', author: 'Princess Chelsea' },
  Song { name: 'Jungle', author: 'Emma Louise' },
  Song { name: 'No Cry', author: 'Fasion' },
  Song { name: 'Cipher', author: 'LEMMiNO' },
  Song { name: 'After Dark', author: 'Mr.Kitty' }
]

Na poli Songs zavoláne námi napsanou metodu shuffle(). Pole poté bude vypadat například takto:

shuffledSongs: [
  Song { name: 'Jungle', author: 'Emma Louise' },
  Song { name: 'Cipher', author: 'LEMMiNO' },
  Song { name: 'Cigarette Duet', author: 'Princess Chelsea' },
  Song { name: 'No Cry', author: 'Fasion' },
  Song { name: 'After Dark', author: 'Mr.Kitty' }
]

Cílem funkce je vrátit pole, které se nebude rovnat originálnímu poli.
````

> Vstupní kód
````js
class Song {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
}

let originalSongs = [
    new Song("Cigarette Duet", "Princess Chelsea"),
    new Song("Jungle", "Emma Louise"),
    new Song("No Cry", "Fasion"),
    new Song("Cipher", "LEMMiNO"),
    new Song("After Dark", "Mr.Kitty")];

function shuffle(songs) {
    //Funkce shuffle() zkopiruje originální pole a bude dělat úpravy přímo v kopii.
    let arrayCopy = [...songs];
    //sem piš kód
    
    return arrayCopy;
}

let shuffledSongs = shuffle(originalSongs);
console.log(shuffledSongs === originalSongs);
````