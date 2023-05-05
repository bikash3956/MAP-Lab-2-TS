"use strict";
class Vehicle {
    constructor(name) {
        this.name = name;
    }
}
class Car extends Vehicle {
    constructor(name) {
        super(name);
        this.acceleration = 0;
    }
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
    getAcceleration() {
        return this.acceleration;
    }
}
let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.getAcceleration()); // 0
car.accelerate(60);
console.log(car.getAcceleration()); // 60
