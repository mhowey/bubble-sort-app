/**
 * ! You can find the old versions of this Sorter inside the "/sorter_version" folder in
 * ! in the root of the project. They are named using Sorter_* as the format with
 * ! the number appearing after the underscore corresponding to the lesson in
 * ! SG's Tutorial Series as it was structured when I took it. I tried to keep
 * ! accurate notes that help summarize the steps taken in the tutorial for my
 * ! future reference.
 */

interface ISortable {
  content: any;
  length: number;
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

    // nested for loops to do our bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // ! REMOVE the type guard for Array...we don't need it anymore
        // if (this.collection instanceof Array) {
        // ! change out the following with our class instance
        // if (this.collection[j] > this.collection[j + 1]) {

        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }

        // ! REMOVE guard for string...and associated logic.
        // ! String sorting implementation is wrapped up in the CharactersCollection class
        // if (typeof this.collection === "string") {}
      }
    }
  }
}
