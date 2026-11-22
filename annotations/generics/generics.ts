class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    const value = this.collection[index];

    if (value === undefined) {
      throw new Error(`No number exists at index ${index}`);
    }

    return value;
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    const value = this.collection[index];

    if (value === undefined) {
      throw new Error(`No string exists at index ${index}`);
    }

    return value;
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    const value = this.collection[index];

    if (value === undefined) {
      throw new Error(`No value exists at index ${index}`);
    }

    return value;
  }
}

const arr = new ArrayOfAnything(["a", "b", "c"]);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);

// Genric Constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (const item of arr) {
    item.print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
