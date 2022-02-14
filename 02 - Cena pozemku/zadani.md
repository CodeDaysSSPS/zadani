Tvůj nadřízený je s tebou po předešlé úloze velmi spokojený a tudíž se ti nebojí dávat o něco těžší úkoly. Spedle momentálně tvoří velký projekt, který by měl být nástrojem pro geodety v několika zemích světa. Vzhledem k aktuálnímu stavu pozemků, je většina z nich složená z trojúhelníků. Tvým úkolem bude vytvořit algoritmus na výpočet obsahu pozemku a jeho cenu dle aktuálních sazeb.

Dostaneš pole, ve kterém se nachází objekty třídy Triangle, třída Triangle v sobě má 3 vlastnosti:

stranu a

výšku va

cenu za m<sup>2</sup>

Tvým úkolem je vypočítat celkovou plochu pozemku, kterou vrátíš do proměnné `totalArea` a celkovou cenu, kterou vrátíš do proměnné `totalPrice`. Dávej si pozor na to, že každá část celkového pozemku může být dražší či levnější.


> Vstupní kód

```js
//Třída Triangle pro nás bude ukládat všechny potřebné proměnné
class Triangle {
    //constructor, který se bude volat při volání `new Triangle`
    constructor(side, height, pricePerMeter) {
        this.side = side;
        this.height = height;
        this.pricePerMeter = pricePerMeter;
    }
}

//vytvoříme proměnnou lands typu pole, a vytvoříme v ní 3 trojúhelníky podle třídy Triangle
let lands = [
    new Triangle(10, 10, 10),
    new Triangle(10, 20, 30),
    new Triangle(100, 150, 400)
];

//Vytvoříme funkci s názvem calculateLandPrice
//calculateLandPrice bere parametr land
function calculateLandPrice(land) {
    //Vytvoříme proměnnou landPrice, kam budeme ukládat cenu pozemku 
    //A nastavíme její základní hodnotu na 0
    let landPrice = 0;

    //sem piš kód
    
    //vrátíme cenu pozemku z funkce s klíčovým slovem return
    //za return napíšeme název proměnné, hodnotu které chceme vrátit
    return landPrice;
}

//Spustíme kus kódu pro každý Triangle v poli lands
lands.forEach(land => {
    //Pro každý land v poli lands zavoláme funkci calculateLandPrice
    //Výslednou cenu uložíme do proměnné landPrice
    let landPrice = calculateLandPrice(land);
    
    //Vypíšeme hodnotu landPrice do konzole
    console.log(landPrice);
});
```