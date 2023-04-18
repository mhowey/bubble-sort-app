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
    /** Javascript String is Immutable
     * ? Why is the following code showing a typescript error?
     *
     * ` this.collection[j] = this.collection[j + 1];
     * ` this.collection[j + 1] = LeftSide;
     *
     * ! Remember, the type for "this.collection" is the union of
     *
     * ` number[] | string
     *
     * ! String is an Immutable type so it cancels out the mutability of
     * ! the Array of numbers because of the union's type narrowing effect.
     *
     * :: Because TypeScript is smart enough to know that you can not
     * :: mutate a string and because the collection type is a union
     * :: of a String and an Array of numbers, we are not allowed to mutate
     * :: the String (if it even is one!). This is one of the pitfalls
     * :: of using unions in this manner. I believe this would be
     * :: considered "type narrowing" - an unintential side-effect
     * :: of this particular type union.
     */

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
