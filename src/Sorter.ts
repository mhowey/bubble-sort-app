/**
 * ! You can find the old versions of this Sorter inside the "/sorter_version" folder in
 * ! in the root of the project. They are named using Sorter_* as the format with
 * ! the number appearing after the underscore corresponding to the lesson in
 * ! SG's Tutorial Series as it was structured when I took it. I tried to keep
 * ! accurate notes that help summarize the steps taken in the tutorial for my
 * ! future reference.
 *
 * :: This version will refactor to allow the Sorter class to extend each of the individual
 * :: data structure classes so that instead of creating an instance of Sorter and feeding
 * :: an instance of data into the sorter, we can simply create an instance of the
 * :: data structure like this:
 *
 * ` const myLinkedList = new CharactersCollection("zcdEDSZaasldk");
 * :: and then to sort the above...we can simply call sort directly from myLinkedList instance:
 * ` const mySortedList = myLinkedList.sort();
 * :: this is more intuitive than passing instances of classes into the Sorter class!
 * :: The whole purpose of this final refactor is to make this Sorter work like that.
 * :: this is a who different experience
 */

// interface ISortable {
//   content: any;
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  /** We need to turn Sorter into an abstract class
   * ? What is an abstract class?
   * :: 1. an abstract class cannot be directly instantiated with the "new" keyword
   * :: 2. an abstract class must be inherited by a child class that implements the functions and properties used by the abstract class
   * :: 3. any time a child class inherits an abstract class, TypeScript enforces that the child class has implementations of the
   * ::    properties and methods that are required by the abstract parent class.
   *
   * @param collection
   */

  /** Remove Type Guards
   * ? In the refactor here, we'll be removing the type guards added earlier...
   */
  sort(): void {
    const { length } = this;

    // nested for loops to do our bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // ! REMOVE the type guard for Array...we don't need it anymore
        // if (this.collection instanceof Array) {
        // ! change out the following with our class instance
        // if (this.collection[j] > this.collection[j + 1]) {

        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }

        // ! REMOVE guard for string...and associated logic.
        // ! String sorting implementation is wrapped up in the CharactersCollection class
        // if (typeof this.collection === "string") {}
      }
    }
  }
}
