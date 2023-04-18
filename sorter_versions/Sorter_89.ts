import { NumbersCollection } from "../src/NumbersCollection";

export class Sorter {
  /** Refactor with New Class
   * Up to now, this sorter class is very specific to sorting an array
   * of numbers and therefore it is not really re-usable for the other
   * data types that we are going to need to sort such as strings, arrays
   * of strings, etc.
   * ! We want the Sorter class to be 100% generic and work with different data types!
   * The for loops are going to be staying the same no matter the data
   * structure being used. The only thing that needs to be "custom" per data
   * structure is:
   * ! the Comparison logic ...and...
   * ! the Swapping logic
   *
   * ? How will we approach handling this?
   * :: We will be creating new classes that handle the different approaches
   * :: needed for sorting different data structures.
   *
   *
   * @param collection
   */
  constructor(public collection: NumbersCollection) {}

  /** Remove Type Guards
   * ? In the refactor here, we'll be removing the type guards added earlier...
   */
  sort(): void {
    const { length } = this.collection;

    /** Remove Type Guards
     * ! In the refactor, we're be removing the type guards added earlier...
     */

    // nested for loops to do our bubble sort
    console.log("DATA:: ", this.collection.content);
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // ! REMOVE the type guard for Array...
        // if (this.collection instanceof Array) {
        // ! change out the following with our class instance
        // if (this.collection[j] > this.collection[j + 1]) {

        console.log("data => ", this.collection.data);
        if (this.collection.compare(j, j + 1)) {
          /**
           * We want to remove this logic and put it out in it's own class
           */
          // const LeftSide = this.collection[j];
          // this.collection[j] = this.collection[j + 1];
          // this.collection[j + 1] = LeftSide;
          this.collection.swap(j, j + 1);
        }

        // ! REMOVE guard for string...and any logic.
        // if (typeof this.collection === "string") {}
      }
    }
  }
}
