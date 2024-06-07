class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

class Car extends Vehicle {}

class Truck extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model);
    this.year = year;
  }
}

class Car extends Vehicle {}

class Truck extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model);
    this.year = year;
  }
}

newCar = new Car("Toyota", "Corolla");

console.log(newCar.brand);
console.log(newCar.model);

newTruck = new Truck("Toyota", "Hilux", 2020);

console.log(newTruck.brand);
console.log(newTruck.model);
console.log(newTruck.year);
