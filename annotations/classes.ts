class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("vroom vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}



const vehicle = new Car();
vehicle.startDrivingProcess();