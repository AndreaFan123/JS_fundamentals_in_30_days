function makeCounter(initialValue = 0) {
  let value = initialValue;
  return {
    get: () => value,
    increment: () => ++value,
    decrement: () => ++value,
    reset: () => (value = initialValue),
  };
}

const counter = makeCounter(1);

console.log(counter.get());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
