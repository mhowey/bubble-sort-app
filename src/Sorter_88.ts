export class Sorter {
  /** Wrong solution with type guards
   * STILL A BAD SOLUTION...
   */
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

  /** TypeGuards to Handle Type Narrowing
   *
   * ? What does a type guard do?
   *
   *
   * ` if (this.collection instanceof Array) {
   * `    ...code to manipulate an array here...
   * ` }
   *
   * :: By wrapping the code that mutates the array, the TypeScript
   * :: error will go away because we have guaranteed TypeScript
   * :: that "collection" will be of type Array.
   *
   * ! Note that the above explanation is why TypeScript restores
   * ! all regular Array methods to "collection".
   */
  sort(): void {
    const { length } = this.collection;
    console.log("INPUT COLLECTION: ", [...this.collection]);

    /** Type Guards
     * All of this only works with type guards
     *
     * ? What are the two ways we create a type guard?
     *
     * :: Using the "typeof" comparison, which only works
     * :: for Javascript primitive values "number, string, boolean, symbol"
     * :: Using "instanceof" for all other data-types that use a
     * :: constructor. For instance (pun intended), you can create an array
     * :: with the following code:
     * ` const myArray = new Array()
     * :: then pushing a couple items into the new Array...
     * ` myArray.push(5)
     * ` myArray.push(-2)
     * :: yields...
     * ` myArray = [5, -2]
     *
     * ! The big problem here:
     * :: is that we would have to have a type guard
     * :: for each Type we are trying to sort, not only are we adding them
     * :: as another union (further exacerbating type narrowing), but
     * :: we will also have to add a type guard if statement below to
     * :: handle the special case and restore access to that types full
     * :: set of properties and methods.
     */

    // nested for loops to do our bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // ! type guard for Array...
        if (this.collection instanceof Array) {
          // If collection is an array of numbers
          if (this.collection[j] > this.collection[j + 1]) {
            const LeftSide = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = LeftSide;
          }
        }
        // ! type guard for string...
        if (typeof this.collection === "string") {
          // because this section is behind the "string" type guard
          // we will have access to ALL string methods and properties
          // If collection is a string do this instead..
          // ~~ logic to compare and swap characters in a string
        }
      }
    }
  }
}
