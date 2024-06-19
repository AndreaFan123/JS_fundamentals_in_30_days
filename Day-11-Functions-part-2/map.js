const nums = [1, 2, 3, 4, 5];

// Use map and double it
const double = nums.map((num) => num * 2);

console.log(double);

const myMethod = {
  factor: 2,
  fn: function (val) {
    return this.factor * val;
  },
};

const double2 = nums.map(myMethod.fn, myMethod);

console.log(double2);
