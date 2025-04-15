# Introduction to `fp-ts`

## What is `fp-ts`?

`fp-ts` is a functional programming library for TypeScript that provides a set of utilities for working with **immutable** and **pure** functions. It allows you to work with **higher-order abstractions** like `Option`, `Either`, `Task`, `Reader`, and more, enabling a more functional style of programming.

The primary goal of `fp-ts` is to bring **functional programming concepts** to TypeScript, making it easier to build robust and scalable applications with predictable behavior. It helps in managing side effects, error handling, and asynchronous computations while ensuring the purity and immutability of your code.

---

## Why use `fp-ts`?

In traditional imperative programming, we manipulate data directly, which can result in side effects, mutable states, and hard-to-maintain code. On the other hand, **functional programming** emphasizes **pure functions**, **immutable data**, and **declarative code**, which leads to more predictable, maintainable, and testable code.

Some benefits of using `fp-ts`:
- **Immutability**: Ensures that data doesn't change unexpectedly.
- **Pure Functions**: Functions that only depend on their inputs and produce consistent outputs.
- **Error Handling**: `fp-ts` provides abstractions like `Either` and `Option` to handle errors explicitly, avoiding exceptions.
- **Composability**: Functions and types can be composed together, leading to more modular and reusable code.
- **Type Safety**: TypeScript's static types work hand-in-hand with `fp-ts` to provide better guarantees about the correctness of your code.

---

## Key Concepts in `fp-ts`

### 1. **Option**

The `Option` type represents a value that might be missing. It has two forms:
- **`some(value)`**: Represents a value that exists.
- **`none`**: Represents the absence of a value.

Example:
```typescript
import { Option, some, none } from 'fp-ts/Option';

const value: Option<number> = some(42);
const empty: Option<number> = none;
```

### 2. **Either**
The Either type represents a computation that can either succeed or fail:

right(value): Represents a successful computation.

left(error): Represents a failed computation, typically used for errors.

Example:

```typescript
import { Either, right, left } from 'fp-ts/Either';

const success: Either<string, number> = right(42);
const failure: Either<string, number> = left('An error occurred');
```
For more details on Either, check the documentation: Either - fp-ts


### 3. **Task**
Task represents an asynchronous computation that results in a value. It is a way to handle asynchronous code in a functional manner.

Example:

```typescript
import { Task } from 'fp-ts/Task';

const fetchData: Task<string> = () => new Promise(resolve => setTimeout(() => resolve('Data fetched'), 1000));

fetchData().then(console.log);  // Prints "Data fetched" after 1 second
```
For more details on Task, check the documentation: Task - fp-ts

## Example
Here's a simple example using Option and Either to show how fp-ts helps manage optional and error-prone values:

```typescript
import { Option, some, none } from 'fp-ts/Option';
import { Either, left, right } from 'fp-ts/Either';

// Using Option to represent a value that might be missing
const maybeValue: Option<number> = some(42);
const noValue: Option<number> = none;

// Using Either to represent a computation that can either succeed or fail
const successfulComputation: Either<string, number> = right(42);
const failedComputation: Either<string, number> = left('Error occurred');

console.log(maybeValue); // some(42)
console.log(noValue); // none
console.log(successfulComputation); // right(42)
console.log(failedComputation); // left('Error occurred')
```



