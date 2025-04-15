import { Option, map, none, some } from "fp-ts/Option";

import { pipe } from "fp-ts/function";

const addFive = (n: number): number => n + 5;

const number1 = 10; // La valeur de number1 reste inchangée
const number2 = pipe(number1, addFive); // On applique addFive à number1 pour obtenir number2

console.log(number1); // 10
console.log(number2); // 15

// Utilisation d'Option pour gérer une valeur optionnelle
const number1Option: Option<number> = some(10); // Une valeur encapsulée dans un 'some'
const number2Option: Option<number> = pipe(
  number1Option,
  map((n) => n + 5) // Applique addFive uniquement si la valeur existe (si elle est 'some')
);

console.log(number1Option); // some(10)
console.log(number2Option); // some(15)
