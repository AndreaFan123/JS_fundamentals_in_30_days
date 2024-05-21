# Day 5: Closure

![Closure](./Day-5.png)

## Table of Contents

---

### Characteristics of Closure

- If a function with closures, we can say that this function is not a pure function.
- A closure in JavaScript refers to a function that remembers its `lexical environment` at the time of creation.

### Characteristics of scope chain

- The scope chain is a list of objects that are searched for an identifier.
- Inner functions can access variables from their outer scope, but outer functions cannot access variables from their inner scope.

```js
function outer() {
  let outerVar = "I am outer";
  function inner() {
    let innerVar = "I am inner";
    console.log(outerVar);
  }
  inner();
  console.log(innerVar);
}
```

Below demonstrates the execution context of the above code:

![Execution Context](./execution-context.png)

#### Why outer function cannot access inner function variable?

Let's review when does lexical scope is created:

- When a function is declared, which is in creation phase, instead of execution phase.

And based on scope chain, think of it a path that allows inner function to go up to the outer function, but not the other way around.

#### Try to explain the following code:

```js
function outerFunction() {
  var outerVariable = "Hello, ";
  function innerFunction(name) {
    console.log(outerVariable + name);
  }
  return innerFunction;
}
var inner = outerFunction();
inner("John"); // Output: Hello, John

// Or you prefer to write it like this:

outerFunction()("John"); // Output: Hello, John
```

1. We declare a function `outerFunction` and inside it, we declare a variable called `outerVariable`, a function called `innerFunction` and return `innerFunction`.
2. `innerFunction` takes a parameter `name` and logs `outerVariable + name`.
3. We declare a variable `inner` and assign the return value of `outerFunction` to it, which is `innerFunction`.
4. We call `inner` with a argument `John`.

#### What is the benefit of using closure?

- Data privacy / Encapsulation

```js
function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

// We can leverage closure to create different counter

let counter1 = counter();
let counter2 = counter();

console.log(counter1()); // Output: 1

console.log(counter2()); // Output: 1

// They won't affect each other
```

- Memoization

Because it can remember the previous result, we can use it to cache the result.

```js
function memoizeSquare() {
  // Declare a cache object
  const cache = {};

  // Return a function that takes a parameter n
  return function (n) {
    // If the result is already in the cache, return it
    if (cache[n] !== undefined) {
      console.log("Fetching from cache:", n);
      return cache[n];
    }

    // Otherwise, calculate the result
    console.log("Calculating result:", n);
    const result = n * n;

    // Store the result in the cache
    cache[n] = result;

    // Return the result
    return result;
  };
}

const square = memoizeSquare();

console.log(square(4)); // Calculating result: 4, Output: 16
console.log(square(4)); // Fetching from cache: 4, Output: 16
console.log(square(5)); // Calculating result: 5, Output: 25
console.log(square(5)); // Calculating result: 5, Output: 25
```
