import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // With noUncheckedIndexedAccess enabled, each array read is
    // number | undefined because the supplied index might not exist.
    const leftHand = this.data[leftIndex];
    const rightHand = this.data[rightIndex];

    // Reject missing values before comparing them.
    // Use an explicit undefined check so valid numbers like 0 are accepted.
    if (leftHand === undefined || rightHand === undefined) {
      throw new Error("Cannot compare: one or both indexes have no value");
    }

    // The missing-value path throws, so TypeScript now knows
    // both variables are numbers.
    return leftHand > rightHand;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Read and preserve both original values before changing the array.
    // Each read has type number | undefined.
    const leftHand = this.data[leftIndex];
    const rightHand = this.data[rightIndex];

    // Validate both values before making either assignment.
    // If a value is missing, stop without partially modifying the array.
    if (leftHand === undefined || rightHand === undefined) {
      throw new Error("Cannot swap: one or both indexes have no value");
    }

    // Both variables are now narrowed to number, so they can safely
    // be assigned back into the number[].
    this.data[leftIndex] = rightHand;
    this.data[rightIndex] = leftHand;
  }
}
