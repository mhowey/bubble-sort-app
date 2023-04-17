export class Sorter {
  /** Union operator's effects on typing
   *
   * @param collection
   * ! Question regarding using the union operator:
   * ? What effect does setting collection to be either an Array of numbers OR a string?
   * :: The effect is that collection can now only access properties and methods that are
   * :: available both and Array of numbers and a string. So for instance an array has
   * :: length property that indicates the number of items in the array, and a string ALSO
   * :: has a length property that indicates the number of characters in the string. HOWEVER,
   * :: only the array would have a "map" method as a string does not. Because this has
   * :: been typed as an Array of numbers OR a string, we cannot use map, and other methods
   * :: that are only available on one or the other type.
   */
  constructor(public collection: number[] | string) {}

  /** Wrong solution with explanations
   * BAD SOLUTION...
   */

  sort(): void {
    // this is equivalent but more concise to the above comment
    const { length } = this.collection;
    console.log("INPUT COLLECTION: ", [...this.collection]);

    // nested for loops to do our bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // If collection is an array of numbers
        if (this.collection[j] > this.collection[j + 1]) {
          const LeftSide = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = LeftSide;
        }
        // If collection is a string do this instead..
        // ~~ logic to compare and swap characters in a string
      }
    }
  }
}
