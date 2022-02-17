Nedávno ze společnosti odešel junior programátor a ty jsi dostal na starost udělat úlohy, které měl dostat on. Jedna z úloh je filtrování oblíbených příspěvků. Budeš tudíž muset napsat funkci, která z seznamu příspěvků vrátí seznam, kde budou pouze oblíbené příspěvky.

> Vstupní kód

```js
class Post {
    constructor(name, liked) {
        this.name = name;
        this.liked = liked;
    }
}

let posts = [
    new Post("A Tour Of C++" ,true),
    new Post("Cracking the coding interview", false),
    new Post("Introduction to Algorithms", false),
    new Post("Clean Code", true)
];

function getLikedPosts(posts) {
    let likedPosts = [];
    
    //sem piš kód
    
    return likedPosts;
}

console.log(getLikedPosts(posts));
```