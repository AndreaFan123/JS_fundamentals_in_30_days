let vehicle = {
  brand: "Toyota",
  model: "Corolla",
};

const car = Object.create(vehicle);

console.log(car.brand);
console.log(car.model);

const myCar = Object.create(car);
myCar.brand = "Tesla";
myCar.model = "S";

console.log(myCar.brand);
console.log(myCar.model);

console.log(vehicle.brand);
console.log(vehicle.model);
