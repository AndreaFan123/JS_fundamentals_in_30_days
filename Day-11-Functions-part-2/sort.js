const nums = [3, 6, 2, 5, 9];

nums.sort();

console.log("Ascending", nums);

const ascendingArr = nums.sort((a, b) => a - b);

console.log("Ascending", ascendingArr);

const descendingArr = nums.sort((a, b) => b - a);

console.log("Descending", descendingArr);

// Not mutating the original array
// Use browser console to see the output
// node.js is not supporting this method yet
// const numbers = [2, 7, 3, 1, 4];

// const newNums = numbers.toSorted();

// console.log("Original", numbers);

// separating the original array
const numbers = [2, 7, 3, 1, 4];

const newNums = [...numbers].sort();

console.log(newNums);

console.log(numbers !== newNums);
