const numbers = [1, 2, 3, 4, 5];

const calculator = {
  divider: 2,
  isEven(number) {
    return number % this.divider === 0;
  },
};

const evenNumbers = numbers.filter(calculator.isEven, calculator);

console.log(evenNumbers);
