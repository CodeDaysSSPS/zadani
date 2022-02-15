Tvůj nadřízený je s tebou po předešlé úloze velmi spokojený a tudíž se ti nebojí dávat o něco těžší úkoly. Spedle momentálně tvoří velký projekt, který by měl být nástrojem pro geodety v několika zemích světa. Vzhledem k aktuálnímu stavu pozemků, je většina z nich složená z trojúhelníků. Tvým úkolem bude vytvořit algoritmus na výpočet obsahu pozemku a jeho cenu dle aktuálních sazeb.

Dostaneš pole, ve kterém se nachází objekty třídy Triangle, třída Triangle v sobě má 3 vlastnosti:

stranu a

výšku va

cenu za m<sup>2</sup>

Tvým úkolem je vypočítat celkovou plochu pozemku, kterou vrátíš do proměnné `totalArea` a celkovou cenu, kterou vrátíš do proměnné `totalPrice`. Dávej si pozor na to, že každá část celkového pozemku může být dražší či levnější.


> Vstupní kód

```js
class Triangle {
    constructor(side, height, pricePerMeter) {
        this.side = side;
        this.height = height;
        this.pricePerMeter = pricePerMeter;
    }
}

let lands = [
    new Triangle(10, 10, 10),
    new Triangle(10, 20, 30),
    new Triangle(100, 150, 400)
];

function calculateLandPrice(land) {
    let landPrice = 0;

    //sem piš kód
    
    return landPrice;
}

let landPrice = 0;

lands.forEach(land => {
    landPrice += calculateLandPrice(land);
    
});

console.log(landPrice);
```