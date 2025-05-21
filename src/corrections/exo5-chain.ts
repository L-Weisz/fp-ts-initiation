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
const validatePositive = (n: number): Either<string, number> => {
  return n > 0 ? right(n) : left("Number must be positive");
};

const doubleNumber = (n: number): Either<string, number> => {
  return right(n * 2);
};

const doubleIfPositive = (n: number): Either<string, number> =>
  pipe(n, validatePositive, chain(doubleNumber));

// Task: Predict and uncomment to verify the result:
console.log(doubleIfPositive(5)); // Should print: right(10)
console.log(doubleIfPositive(-3)); // Should print: left("Number must be positive")

const validateEven = (n: number): Either<string, number> =>
  n % 2 === 0 ? right(n) : left("Number must be even");

const tripleIfPositiveAndEven = (n: number): Either<string, number> => {
  return pipe(
    n,
    validatePositive,
    // Use `chain` to validate the number is even
    chain((number) => validateEven(number)),
    // Finally, use `chain` again to triple the number
    chain((number) => right(number * 3))
  );
};

const fetchAndDisplayUserDetails: Task<string> = pipe(
  fetchUserId,
  chainTask((userId) => fetchUserDetails(userId))
);
