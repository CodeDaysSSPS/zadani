Nadřízený tě kontaktoval s úkolem. 
Do jedné z aplikací, které jsou momentálně ve finální fázi vývoje
a je potřeba přidat funkci vypočítání průměru ceny zboží v košíku,
tato informace není mířená pro zákazníka, ale pro analytické účely,
tudíž ji stačí uložit do proměnné `averagePrice`. 
Tvým úkolem bude vzít celkový počet produktů a jejich různé ceny
a vypočítat z nich aritmetický průměr. Pusť se do toho, aplikace brzy
musí mezi lidi!

> Vstupní kód

```js
class Product {
    constructor(price, name) {
        this.price = price;
        this.name = name;
    }
}

let products = [
    new Product(200, "Jablko"),
    new Product(200, "Hruška"),
    new Product(500, "Pomeranče"),
];

function calculateAveragePrice() {
    let averagePrice = 0;

    //sem piš kód

    return averagePrice;
}

console.log(calculateAveragePrice());
```
