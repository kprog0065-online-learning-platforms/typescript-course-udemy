class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Typeguard to check if the collection is an array of numbers
        if (this.collection instanceof Array) {
          const leftHand = this.collection[j];
          const rightHand = this.collection[j + 1];

          if (leftHand === undefined || rightHand === undefined) {
            throw new Error("Expected two numbers while sorting");
          }

          if (leftHand > rightHand) {
            this.collection[j] = rightHand;
            this.collection[j + 1] = leftHand;
          }
        }

        // Typeguard to check if the collection is a string
        if (typeof this.collection === "string") {
          const leftHand = this.collection[j];
          const rightHand = this.collection[j + 1];

          if (leftHand === undefined || rightHand === undefined) {
            throw new Error("Expected two characters while sorting");
          }

          if (leftHand > rightHand) {
            const collectionArray = this.collection.split("");
            collectionArray[j] = rightHand;
            collectionArray[j + 1] = leftHand;
            this.collection = collectionArray.join("");
          }
        }
      }
    }
  }
}

const sorter = new Sorter("Word");
sorter.sort();
console.log(sorter.collection);
