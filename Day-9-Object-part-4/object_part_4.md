# Day 9 Object Part 4 (Prototype Inheritance)

![day-9](./Day-9.png)

## Table of Contents

Some people say that JavaScript is an OOP (Object-Oriented Programming) language, while others say it is not. I don't want to argue which one is correct, simply because JavaScript has been a language created under a business need (pressures?) and Mr. Eich created it in 10 days (this is crazy), it's clear that JS has its mysterious parts that confused people, me as well, but dig into it and try to figure out how it works is fun, os perhaps we can just embrace its nature and learn how to use it.

### What is Prototype-based programming?

Prototype-based programming is a style of OOP, and OOP language allows inheritance for code reuse and extendability, there're two forms of inheritance(or I should say two styles of inheritance):

1. Class-based inheritance
2. Prototype-based inheritance

---

### Short brief of Class-based inheritance

- Using classes to create objects.
- Objects/instances are created from classes.
- Using a method called `constructor` to initialize objects.
- All the methods available in the parent class are available in the child class.

Let's use python and JavaScript to create a Vehicle class and a child class called Car.

```python
# Python

class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

# No overriding parent class
class Car(Vehicle):
    pass # Inherit everything automatically

# Overriding parent class, adding new attribute
class Truck(Vehicle):
    def __init__(self, brand, model, year):
        # Call methods from Vehicle
        super()._init__(brand, model)
        self.year = year

newCar = Car("Toyota", "Corolla")

print(newCar.brand) # Output: Toyota
print(newCar.model) # Output: Corolla

newTruck = Truck("Toyota", "Hilux", 2020)

print(newTruck.brand) # Output: Toyota
print(newTruck.model) # Output: Hilux
print(newTruck.year) # Output: 2020

```

```javascript
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

// No overriding parent class
class Car extends Vehicle {}

// Overriding parent class, adding new attribute
class Truck extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model);
    this.year = year;
  }
}

newCar = new Car("Toyota", "Corolla");
console.log(newCar.brand); // Output: Toyota
console.log(newCar.model); // Output: Corolla

newTruck = new Truck("Toyota", "Hilux", 2020);

console.log(newTruck.brand); // Output: Toyota
console.log(newTruck.model); // Output: Hilux
console.log(newTruck.year); // Output: 2020
```

---

Ok, we have learned how to create classes and child classes using JavaScript, so does JavaScript a OOP language? I'd say it's not a pure OOP language, but since prototype-based inheritance is a style of OOP, I'd like to say it is a branch of OOP. (This is the way I understand it, if you have a different opinion, please let me know.)

### Prototype-based inheritance

JavaScript is a prototype-based language, before **es6**, we use can declare a object using curly braces `{}` and use `Object.create()` to create a new object and assign the prototype of the object to the parent object.

```javascript
const Vehicle = {
  brand: "Toyota",
  model: "Corolla",
};

const Car = Object.create(Vehicle);

console.log(Car.brand); // Output: Toyota
console.log(Car.model); // Output: Corolla
```
