import { filter } from "fp-ts/Array";
import { map } from "fp-ts/Array";
import { pipe } from "fp-ts/function";

const numbers = [1];
const resultComplex = pipe(
  numbers,
  map((n) => n * 2), // Multiply each number by 2
  map((n) => n + 5), // Add 5 to each result
  filter((n) => n < 20) // Keep numbers less than 20
);
