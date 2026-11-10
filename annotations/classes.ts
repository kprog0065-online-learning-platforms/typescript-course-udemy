class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();