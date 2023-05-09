
abstract class Vehicle {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract honk(): void;
    abstract accelerate(speed: number): void;
}

class Car extends Vehicle {
    private acceleration: number = 0;
    constructor(name: string) {
        super(name);
    }
    honk(): void {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
    getAcceleration(): number {
        return this.acceleration;
    }
}

let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.getAcceleration()); // 0
car.accelerate(60);
console.log(car.getAcceleration()); // 60asdfasdfsda