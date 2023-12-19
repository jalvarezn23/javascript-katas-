// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"

avengers.splice(0,1,"IRONMAN");
console.log(avengers);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.

console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty","Summer");
let lastElement = rickAndMortyCharacters[rickAndMortyCharacters.length -1];
console.log(lastElement);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length -1]);


// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);