console.log("working");

// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let avenger = avengers[0];

console.log(avenger);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";
let newAvenger = avengers[0];

console.log(newAvenger);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let length = avengers.length;

alert(length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("MORTY ", "SUMMER ");

let newLength = rickAndMortyCharacters.length;

alert(newLength);

let lastCharacter = rickAndMortyCharacters[4];

console.log(lastCharacter);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

rickAndMortyCharacters[5] = "LAPIZ LOPEZ";

let newLastCharacter = rickAndMortyCharacters[5];
console.log(newLastCharacter);

rickAndMortyCharacters.pop();

console.log(rickAndMortyCharacters);

let character1 = rickAndMortyCharacters[0];
let character2 = rickAndMortyCharacters[4];

console.log(character1, character2);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters.splice(1, 1);

console.log(rickAndMortyCharacters);
