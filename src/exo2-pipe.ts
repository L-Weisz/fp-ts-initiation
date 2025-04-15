/*
  Exercise: Understanding `pipe` in fp-ts

  Objective:
  - Understand how `pipe` works in fp-ts to compose functions.
  - Compare the `pipe` method with traditional function calls, and see how it improves code readability and composition in functional programming.

  `pipe` is a function from fp-ts that allows you to **compose functions** in a declarative and readable way. It takes a value as the first argument and applies the functions passed to it in sequence, returning the final result.

  This exercise will demonstrate how `pipe` allows for easier function composition and data manipulation, making functional programming in TypeScript more convenient and clean.

*/

// ----------------------------------------------------------------------------
// 1. Traditional Function Calls: Applying functions one by one
// ----------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

// Task: Add 10 to each element, then filter out numbers less than 15
// Traditional way: Applying functions one by one
const resultImperative = numbers.map((n) => n + 10).filter((n) => n >= 15);

console.log("Traditional Function Calls:");
// What will be printed ?
//console.log(resultImperative); // Prints XXXX

/*
  Explanation:
  - We apply the functions one after the other, starting with `map`, then `filter`.
  - This is a perfectly valid approach, but as the number of transformations grows, the code can become harder to read and maintain.
*/

// ----------------------------------------------------------------------------
// 2. Using `pipe` for Function Composition
// ----------------------------------------------------------------------------

import { filter } from "fp-ts/Array";
import { map } from "fp-ts/Array";
import { pipe } from "fp-ts/function";

// Task: Use `pipe` to compose the functions together
const resultWithPipe = pipe(
  numbers, // The input value
  map((n) => n + 10), // Add 10 to each number
  filter((n) => n >= 15) // Keep numbers greater than or equal to 15
);

console.log("Using `pipe` for Function Composition:");
console.log(resultWithPipe); // Prints [1,2,3,]

/*
  Explanation:
  - Here, `pipe` allows us to **compose** the functions (`map`, `filter`) in a readable and clean manner.
  - It allows you to apply multiple transformations to the input value step-by-step without nesting the function calls.
  - The value flows through each function, making the code more declarative and easy to follow.
*/

// ----------------------------------------------------------------------------
// 3. More Complex Example with Multiple Functions and `pipe`
// ----------------------------------------------------------------------------

// Task : write a function using fp-ts that will
// 1 - multiple each number by 2
// 2 - Add 5 to each result
// 3 - keep numbers less than 20
const resultComplex = numbers;

console.log("More Complex Example with `pipe`:");
console.log(resultComplex); // Should print [7, 9, 11, 13, 15]
console.log(
  "Exo succeeded",
  JSON.stringify(resultComplex) === JSON.stringify([7, 9, 11, 13, 15])
);

/*
  Explanation:
  - In this more complex example, we can easily apply a sequence of functions to manipulate the data.
  - Using `pipe` makes it clear that the data is transformed in a series of steps without having to deal with nested function calls.
*/

// ----------------------------------------------------------------------------
// Summary:
// ----------------------------------------------------------------------------

/*
  - In traditional function calls, we apply functions one by one, which works fine but can become cumbersome when the number of transformations increases.
  - `pipe` in fp-ts allows us to **compose functions** in a clean, readable way, transforming data step-by-step in a more declarative style.
  - This approach is particularly useful in functional programming, where you often need to apply multiple transformations to data without mutating it.
*/
