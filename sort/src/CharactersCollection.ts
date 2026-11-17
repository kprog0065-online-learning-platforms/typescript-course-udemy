import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // Indexed reads might not find a character.
    const leftHand = this.data[leftIndex];
    const rightHand = this.data[rightIndex];

    // Stop if either requested character is missing.
    if (leftHand === undefined || rightHand === undefined) {
      throw new Error("Cannot compare: one or both indexes have no character");
    }

    // Both values are now strings, so string methods are safe.
    return leftHand.toLowerCase() > rightHand.toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");

    // Array indexing also produces potentially missing values.
    const leftHand = characters[leftIndex];
    const rightHand = characters[rightIndex];

    // Check both values before modifying the array.
    if (leftHand === undefined || rightHand === undefined) {
      throw new Error("Cannot swap: one or both indexes have no character");
    }

    characters[leftIndex] = rightHand;
    characters[rightIndex] = leftHand;

    this.data = characters.join("");
  }
}
