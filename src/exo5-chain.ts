/*
  Exercise: Understanding `chain` in fp-ts

  Objective:
  - Learn how `chain` is used in fp-ts to sequence operations that return wrapped values (like `Either` or `Task`).
  - Understand how `chain` allows you to handle operations that depend on the result of previous operations, maintaining a clean and declarative flow.

  In fp-ts, `chain` is a key function used to **sequence operations** that themselves return wrapped values (`Either`, `Task`, etc.). This allows you to avoid deeply nested function calls, leading to more readable and maintainable code.

  This exercise will help you practice using `chain` by completing interactive examples that gradually build understanding.
*/

import { Either, chain, left, map, right } from "fp-ts/Either";
import { Task, chain as chainTask } from "fp-ts/Task";

import { pipe } from "fp-ts/function";

// ----------------------------------------------------------------------------
// 1. Simple Chaining with `Either`
// ----------------------------------------------------------------------------

// Create a function to validate numbers
// 1. checks if the number is positive
// 2. if it is, it returns the number wrapped in `right`
// 3. if not, it returns an error message wrapped in `left`
// 4. Type the return value
const validatePositive = (n: number) => {};

// Create a function that double a number n if it is positive
// Type the return value
const doubleIfPositive = (n: number) => {};

// Task: Predict to verify the result:
console.log(doubleIfPositive(5)); // Should print: right(10)
console.log(doubleIfPositive(-3)); // Should print: left("Number must be positive")

// ----------------------------------------------------------------------------
// 2. Complete the Exercise: Chaining Multiple Validations
// ----------------------------------------------------------------------------

// Complete the function below to:
// - Validate if the number is positive
// - Validate if the number is even
// - Return the number multiplied by 3 if both validations pass

const validateEven = (n: number) => {};

const tripleIfPositiveAndEven = (n: number) => {};
// Task: Complete the function above, then uncomment and verify:
console.log(tripleIfPositiveAndEven(4)); // Should print: right(12)
console.log(tripleIfPositiveAndEven(3)); // Should print: left("Number must be even")
console.log(tripleIfPositiveAndEven(-2)); // Should print: left("Number must be positive")

// ----------------------------------------------------------------------------
// 3. Chaining with `Task`
// ----------------------------------------------------------------------------

// Task: Complete the exercise by chaining tasks that simulate async operations:

const fetchUserId: Task<number> = () => Promise.resolve(10);

const fetchUserDetails =
  (userId: number): Task<string> =>
  () =>
    Promise.resolve(`User details for ID ${userId}`);

// chain the tasks together using chainTask
const fetchAndDisplayUserDetails = {};
// Task: Complete the chaining above, then uncomment and execute:
//fetchAndDisplayUserDetails().then(console.log); // Should print: "User details for ID 10"

// ----------------------------------------------------------------------------
// Summary:
// ----------------------------------------------------------------------------

/*
  - `chain` helps manage the sequence of operations where each step depends on the previous result.
  - It avoids deeply nested code, improving readability and maintainability.
  - This pattern is especially useful with types like `Either` for error handling and `Task` for asynchronous operations.
*/
