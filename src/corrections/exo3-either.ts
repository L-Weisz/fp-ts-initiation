import { Either, left, right } from "fp-ts/Either";

import { map } from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";

const divideFunctional = (a: number, b: number): Either<string, number> => {
  if (b === 0) {
    return left("Cannot divide by zero"); // Return an error if division by zero
  }
  return right(a / b); // Return the result wrapped in a `right` if division is valid
};

const safeDivide = (a: number, b: number): Either<string, number> =>
  pipe(
    divideFunctional(a, b),
    map((result) => result * 2) // Multiply the result by 2 if division was successful
  );
