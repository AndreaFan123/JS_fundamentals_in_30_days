const numbers = [1, 2, 3];
const initialVal = 0;

const sum = numbers.reduce(
  (accumulator, currentVal) => accumulator + currentVal,
  initialVal
);

console.log(sum); // 6
