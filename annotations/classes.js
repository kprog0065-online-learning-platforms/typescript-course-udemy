"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    drive() {
        console.log("chugga chugga");
    }
    honk() {
        console.log("beep beep");
    }
}
class Car extends Vehicle {
    drive() {
        console.log("vroom vroom");
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const vehicle = new Car();
vehicle.startDrivingProcess();
//# sourceMappingURL=classes.js.map