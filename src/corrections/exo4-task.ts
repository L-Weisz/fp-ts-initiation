/*
  Exercise: Understanding `Task` in fp-ts

  Objective:
  - Understand how `Task` works in fp-ts to handle asynchronous computations functionally.
  - Learn how to create and execute `Task` instances to perform asynchronous operations in a functional style.
  
  In `fp-ts`, a `Task` represents an **asynchronous computation** that produces a value. Unlike Promises, `Task` is an abstraction that allows you to compose asynchronous computations in a declarative manner without executing them immediately.

  This exercise will demonstrate how to use `Task` to handle asynchronous code in a functional and predictable way, without dealing directly with side effects.

*/

// ----------------------------------------------------------------------------
// 1. Traditional Asynchronous Code: Using Promises
// ----------------------------------------------------------------------------

// Task: Use a promise to simulate an asynchronous operation that fetches data
const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched successfully"), 1000);
  });
};

// Task: Execute the promise and log the result
fetchData().then((result) => {
  console.log("Promise Result:", result); // Should print "Data fetched successfully"
});

/*
    Explanation:
    - In this traditional approach, we use a Promise to handle the asynchronous operation.
    - While this works, promises are executed immediately and their behavior is not as composable as `Task` in functional programming.
  */

// ----------------------------------------------------------------------------
// 2. Using `Task` for Asynchronous Operations
// ----------------------------------------------------------------------------

import { chain, map } from "fp-ts/Task";

import { Task } from "fp-ts/Task";
import { pipe } from "fp-ts/function";

// Task: Create a `Task` that performs the same operation as the `Promise` above
const fetchDataTask: Task<string> = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched successfully using Task"), 1000);
  });
};

// Task: Execute the task and log the result
fetchDataTask().then((result) => {
  console.log("Task Result:", result); // Should print "Data fetched successfully using Task"
});

/*
    Explanation:
    - Here, we use `Task` to define the asynchronous operation, but unlike promises, it doesn't execute until we call it.
    - `Task` is an abstraction over a promise, allowing us to compose and chain tasks more easily.
  */

// ----------------------------------------------------------------------------
// 3. Composing Tasks Using `pipe`
// ----------------------------------------------------------------------------


// Task: Chain two tasks using `pipe`
// First, we simulate fetching data, then simulate processing it.
const processDataTask: Task<string> = pipe(
  fetchDataTask, // The first task (fetching data)
  (task) => () => task().then((result) => `${result} and processed`) // Chain processing to the result
);

// Task: Execute the composed task and log the result
processDataTask().then((result) => {
  console.log("Composed Task Result:", result); // Should print "Data fetched successfully using Task and processed"
});

/*
    Explanation:
    - Here, we used `pipe` to chain two asynchronous operations together.
    - The first task fetches the data, and then the second task processes the fetched data.
    - `pipe` makes it clear that the result of one task is passed to the next, enabling a declarative approach to async computations.
  */

// ----------------------------------------------------------------------------
// 4. Using `map` and `chain` to Transform and Chain Tasks
// ----------------------------------------------------------------------------


// Task: Map over the result of a task to transform it
const fetchDataWithMap: Task<string> = pipe(
  fetchDataTask,
  map((result) => `${result} and enhanced with map`)
);

// Task: Chain another task to the previous one using `chain`
const fetchDataWithChain: Task<string> = pipe(
  fetchDataTask,
  chain((result) =>
    pipe(
      fetchDataTask, // Another task to fetch new data
      map((newResult) => `${result} + ${newResult}`) // Combine both results
    )
  )
);

// Execute the tasks and log the results
fetchDataWithMap().then((result) => {
  console.log("Task with map Result:", result); // Should print "Data fetched successfully using Task and enhanced with map"
});

fetchDataWithChain().then((result) => {
  console.log("Task with chain Result:", result); // Should print "Data fetched successfully using Task + Data fetched successfully using Task"
});

/*
    Explanation:
    - `map` is used to **transform** the result of the `Task`, while `chain` is used to **chain** multiple tasks.
    - `map` allows us to modify the result without executing the task again, whereas `chain` allows us to compose tasks that depend on the result of previous tasks.
  */

// ----------------------------------------------------------------------------
// Summary:
// ----------------------------------------------------------------------------

/*
    - In traditional asynchronous programming, we directly use Promises, but they execute immediately and don't have the same composability as `Task`.
    - `Task` in fp-ts represents an asynchronous operation that doesn't execute until we invoke it. It allows us to compose and chain tasks declaratively, making asynchronous code more predictable and easy to manage.
    - `map` and `chain` are functional abstractions that help transform and compose tasks in a clean and composable way.
  */
