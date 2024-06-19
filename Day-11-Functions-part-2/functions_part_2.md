# Day 11 : Functions part 2 (Higher Order Functions)

![day-11](./Day-11.png)

## Table of Contents

- [What is a Higher Order Function?](#what-is-a-higher-order-function)
  - [Accepting functions as arguments](#accepting-functions-as-arguments)
  - [Returning a function](#returning-a-function)
- [Common Higher Order Functions in JavaScript](#common-higher-order-functions-in-javascript)
  - [`map()`](#map)
  - [`filter()`](#filter)
  - [`reduce()`](#reduce)
  - [`sort()`](#sort)

### What is a Higher Order Function?

In computer science and mathematics, a higher-order function (HOF) is a function that does at least one of the following:

1. Takes one or more functions as arguments.
2. Returns a function as its result.

#### Accepting functions as arguments

This allows for dynamic behavior, as functions can be passed as arguments to other functions.

```js
function greeting() {
  return `Hello, ${name}`;
}

function user(name, callback) {
  return callback(name);
}

console.log(user("Andy", greeting)); // Hello, Andy
```

Let's walk through the code snippet above:

- We created a function `greeting` that return a string `Hello, ${name}`.
- We created a function `user` that takes two arguments, `name` and `callback`, and the `callback` here is a function.
  - The `user` function returns the result of calling the `callback` function with the `name` argument.
- We passed `Andy` and the `greeting` function as arguments to the `user` function.
- The `user` function calls the `greeting` function with the `Andy` argument and returns the result.

#### Returning a function

```js
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);

console.log(double(5)); // 10
```

Let's walk through the code snippet above:

- We created a function `multiplier` that takes one argument `x` and returns a function that takes another argument `y` and returns the `x * y`.

- We created a constant `double` that stores the result of calling the `multiplier` function with the argument `2`.

  ```js
  const double = function (y) {
    return 2 * y;
  };

  double(5);
  ```

- We called the `double` function with the argument `5` and it returns `10`, like below:
  ```js
  function(5) {
    return 2 * 5;
  }
  ```

---

### Common Higher Order Functions in JavaScript

- `map()`
- `filter()`
- `reduce()`
- `sort()`

#### `map()`

`map()` is a method of `Array`, it creates a new array with the results. It takes two parameters, a `callbackFn` and an optional `thisArg`, `thisArg` is a value to use as `this` when executing `callbackFn`.

```js
const numbers = [1, 2, 3, 4, 5];

// Using function expression
const doubled = numbers.map(function (number) {
  return number * 2;
});

// Using arrow function
const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

The code above shows basic usage of the `map()` method, when you need to iterate over an array and modify each element in the array.

if somehow we need to **access an object**, we can use the second parameter of the `map()` method (`thisArg`), like below:

```js
const numbers = [1, 2, 3, 4, 5];

const calculator = {
  multiplier: 2,
  multiply(number) {
    return number * this.multiplier;
  },
};

const doubled = numbers.map(calculator.multiply, calculator);
console.log(doubled); // [2, 4, 6, 8, 10]
```

#### `filter()`

`filter()` method creates a **shallow copy** of a portion of a given array.

Same as `map()`, it takes two parameters, a `callbackFn` and an optional `thisArg`.

first of all, let's talk about what is a **shallow copy** in a simple way, we will dive into it in the next section.

- The opposite of a shallow copy is a deep copy.
- A shallow copy of an object means it shares the same properties as the original object.
- When we change either the source of the copy or the copy itself, the changes are reflected in both objects.

```js
const numbers = [1, 2, 3, 4, 5];

// Using function expression
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Using arrow function
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

With `thisArg`:

```js
const numbers = [1, 2, 3, 4, 5];

const calculator = {
  divider: 2,
  isEven(number) {
    return number % this.divider === 0;
  },
};

const evenNumbers = numbers.filter(calculator.isEven, calculator);

console.log(evenNumbers); // [2, 4]
```

#### `reduce()`

`reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.

```js
const numbers = [1, 2, 3];
const initialVal = 0;

const sum = numbers.reduce(
  (accumulator, currentVal) => accumulator + currentVal,
  initialVal
);

console.log(sum); // 6
```

Here is how `reduce()` works:

- First time:

  - accumulator = initialVal = `0`
  - currentVal = numbers[0] = `1`
  - execute callback function: `accumulator + currentVal = 0 + 1 = 1`
  - return `1` as the new accumulator value

- Second time:

  - accumulator = `1`
  - currentVal = numbers[1] = `2`
  - execute callback function: `accumulator + currentVal = 1 + 2 = 3`
  - return `3` as the new accumulator value

- Third time:
  - accumulator = `3`
  - currentVal = numbers[2] = `3`
  - execute callback function: `accumulator + currentVal = 3 + 3 = 6`
  - return `6` as the new accumulator value
  - no more elements in the array, return `6`

#### `sort()`

`sort()` is a method that sorts the elements of an array **in place** and returns the **reference** to the same and sorted array, the default sort order is ascending.

##### What is in place?

- It is an algorithm - `in-place algorithm`.
- It operates directly on the input data structure without requiring extra space proportional to the input size.
- The opposite of an in-place algorithm is an out-of-place algorithm.

```js
const nums = [3, 6, 2, 5, 9];

nums.sort();

console.log("Ascending", nums); // [2, 3, 5, 6, 9]

const ascendingArr = nums.sort((a, b) => a - b);

console.log("Ascending", ascendingArr); // [2, 3, 5, 6, 9]

const descendingArr = nums.sort((a, b) => b - a);

console.log("Descending", descendingArr); // [9, 6, 5, 3, 2]
```

The code above will mutate the original array, if you want to keep the original array unchanged, you can create a copy of the array and sort the copy.

```js
// Using toSorted() method, but it's not support in node.js yet.
// Try to use it in the browser console.
const numbers = [2, 7, 3, 1, 4];

const newNums = numbers.toSorted();

console.log(numbers); // [1, 2, 3, 4, 7]

console.log(numbers !== newNums); // true

// Using ...spread operator
const numbers = [2, 7, 3, 1, 4];

const newNums = [...numbers].sort();

console.log(newNums); // [1, 2, 3, 4, 7]

console.log(numbers !== newNums); // true
```
