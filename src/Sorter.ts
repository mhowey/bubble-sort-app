interface ISortable {
  length: number;
  content: number[];
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
export class Sorter {
  /** We need to add an interface
   * ? What do we need to sort a collection?
   * :: 1. we need a collection of data
   * :: 2. we need a length property, so we know how many times to iterate
   * :: 3. we need a compare method, so we know what two values we're comparing (i.e. left and right)
   * :: 4. we need a swap method, so we can move the lower values to the left when needed
   *
   * ! Our interface will tell other types that they can be sorted no matter what kind of
   * ! type they are as long as they satisfy the abover needed 4 things!
   *
   * @param collection
   */
  constructor(public collection: ISortable) {}

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