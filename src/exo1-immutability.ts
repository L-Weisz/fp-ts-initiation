/*
  Exercise: Immutability in Functional Programming

  Objective:
  - Understand the principle of immutability in functional programming.
  - Compare the imperative approach where data is directly modified, and the functional approach where data is immutable.
  
  Immutability is a fundamental concept in functional programming. 
  This means that once a piece of data is created, it cannot be modified. 
  Instead of modifying a piece of data, a new piece of data is generated from the original, which avoids undesirable side effects and makes the program more predictable.

  In imperative programming, we are accustomed to modifying existing data, which can lead to unintended behaviors if multiple parts of the program modify the same data.

  This exercise will demonstrate the difference between these two approaches through a simple list manipulation example.
*/

// ----------------------------------------------------------------------------
// 1. Imperative Version: Directly modifying data
// ----------------------------------------------------------------------------

// In imperative programming, we often use mutable variables (using `let`).
// But in case of `const`, we can't reassign it, but we can modify the elements of an array or object inside it.
const numbers = [1, 2, 3, 4, 5]; // `const` prevents reassigning the array, but we can modify its content.

// Task: Add 10 to each element in the list imperatively
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 10; // Direct modification of the list elements
}
// What will be printed ?
console.log("Imperative Version:");
// uncomment this line to check the result
// console.log(numbers); // Prints XXXXXX

/*
  Explanation:
  - Here, we have directly modified the elements of the list. 
  - This demonstrates the imperative approach, where data is changed in place.
  - While we can't reassign a `const` variable, we can still modify the contents of an array or object it holds.
  - In more complex programs, this can cause problems if multiple parts of the code try to modify the same data.
*/

// ----------------------------------------------------------------------------
// 2. Functional Version: Immutability with `map` (Creating a new list)
// ----------------------------------------------------------------------------

const numbersFunctional = [1, 2, 3, 4, 5];

// Task: Add 10 to each element in the list functionally without modifying the original
const resultFunctional = numbersFunctional.map((n) => n + 10); // Creating a new list

console.log("Functional Version:");
// What will be printed ?
// expected logs :
// uncomment this line to check the result
//console.log(numbersFunctional); // Prints XXXXXX
//console.log(resultFunctional); // Prints XXXXX

// ----------------------------------------------------------------------------
// 3. Functional Version with `map` (using fp-ts to show a more declarative approach)
// ----------------------------------------------------------------------------

import { map } from "fp-ts/Array";
import { pipe } from "fp-ts/function";

// Task: Use `fp-ts` to manipulate data immutably
const resultFpTs = pipe(
  numbersFunctional,
  map((n) => n + 10)
);

console.log("Functional Version with fp-ts:");
// What will be printed ?
// expected logs :
// uncomment this line to check the result
//console.log(numbersFunctional); // Prints XXXXXX
//console.log(resultFunctional); // Prints XXXXX

// ----------------------------------------------------------------------------
// Summary:
// ----------------------------------------------------------------------------

/*
  - In the imperative approach, data is modified directly in the original list, which is less secure and can lead to side effects.
  - In functional programming, we create a new value with each transformation of the data, preserving the original data intact. This ensures that data is not unexpectedly modified, and reduces the risks of errors related to side effects.
*/
