/*
  Exercise: Understanding `Either` in fp-ts

  Objective:
  - Understand how `Either` works in fp-ts to handle errors explicitly.
  - Learn how to use `left` for error handling and `right` for success, and how to combine them functionally using `pipe`.
  
  `Either` is a type that represents a value that can either be successful (using `right`) or failed (using `left`). 
  This is particularly useful for handling errors without relying on exceptions, allowing for safer and more predictable code.

  This exercise will demonstrate how to use `Either` to handle errors functionally, making your code more robust and easier to maintain.
*/

// ----------------------------------------------------------------------------
// 1. Traditional Error Handling: Using Exceptions
// ----------------------------------------------------------------------------

const divideImperative = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

// Task: Try to divide two numbers
try {
  const resultImperative = divideImperative(10, 2);
  console.log("Imperative Result:", resultImperative); // Should print 5
  const resultImperative2 = divideImperative(10, 0);
} catch (error: any) {
  console.log("Error:", error.message); // Should print "Error: Cannot divide by zero"
}

/*
    Explanation:
    In this imperative approach, we throw an error when the division is invalid (i.e., division by zero).
  */

// ----------------------------------------------------------------------------
// 2. Using `Either` for Error Handling in a Functional Way
// ----------------------------------------------------------------------------

import { Either, left, right } from "fp-ts/Either";

import { map } from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";

// Task: Create a function that uses `Either` to handle errors functionally
const divideFunctional = (a: number, b: number) => {};

// Task: Try to divide two numbers using Either
const result1 = divideFunctional(10, 2); // right(5)
const result2 = divideFunctional(10, 0); // left("Cannot divide by zero")

// what will be printed
console.log("Functional Result 1:", result1); // Should print right(5)
console.log("Functional Result 2:", result2); // Should print left("Cannot divide by zero")

/*
    Explanation:
    - We use `Either` to explicitly handle errors. If the division is valid, we return the result wrapped in `right`, otherwise, we return an error message wrapped in `left`.
    - This makes error handling explicit and safe, and we can avoid interrupting the flow of the program with exceptions.
    - The result is now a value of type `Either<string, number>`, meaning it is either an error or a valid result.
  */

// ----------------------------------------------------------------------------
// 3. Using `pipe` to Chain `Either` Functions
// ----------------------------------------------------------------------------

// Task: Chain two operations that might fail using `pipe`
// Task: Try to divide then multiply by 2

const safeDivide = (a: number, b: number) => {};

const result3 = safeDivide(10, 2); // right(10)
const result4 = safeDivide(10, 0); // left("Cannot divide by zero")

console.log("Chained Functional Result 1:", result3); // Should print right(10)
console.log("Chained Functional Result 2:", result4); // Should print left("Cannot divide by zero")

/*
    Explanation:
    - We use `pipe` to chain the result of one `Either` operation to the next.
    - In this case, if the division is successful, we multiply the result by 2. If there is an error, the function will return `left` and skip further operations.
    - This is a key feature of `Either`: it "short-circuits" the operations as soon as an error (`left`) is encountered.
    - `pipe` makes the chaining of operations more readable and declarative, improving the flow of the program.
  */

// ----------------------------------------------------------------------------
// Summary:
// ----------------------------------------------------------------------------

/*
    - In the imperative approach, we use exceptions to handle errors, which can interrupt the program flow and make error handling harder to manage.
    - `Either` in fp-ts provides a functional way to handle errors explicitly. We can return either a result (`right`) or an error (`left`), and chain these results using `pipe`.
    - Using `Either` and `pipe` makes the error handling process more declarative, safer, and easier to reason about.
    - This approach ensures that errors are handled gracefully without relying on exceptions, leading to more predictable and maintainable code.
  */
