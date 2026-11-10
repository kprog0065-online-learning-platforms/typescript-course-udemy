"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    color;
    constructor(color) {
        this.color = color;
    }
    honk() {
        console.log("beep");
    }
}
const vehicle = new Vehicle("orange");
console.log(vehicle.color);
// class Car extends Vehicle {
//  private drive(): void {
//    console.log('vroom');
//  }
//  startDrivingProcess(): void {
//    this.drive();
//    this.honk();
//  }
// }
//# sourceMappingURL=classes.js.map