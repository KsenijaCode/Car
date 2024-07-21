import { Car } from "./js/Car.js";

const audi = new Car('Audi', '80', 'golden', '40', '10 l / 100 km');
console.log(audi);
console.log(audi.name);
console.log(audi.model);
console.log(audi.color);
console.log(audi.capacity);
console.log(audi.fuelConsumption);

console.log(audi.startEngine());
console.log(audi.stopEngine());

console.log(audi.startMove());