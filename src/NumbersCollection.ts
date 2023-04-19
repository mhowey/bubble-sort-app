/**
 * NumbersCollection class is intentionally implementing the ISortable interface.
 * We want this class to be eligible to be used for sorting so we need to make
 * sure that it contains all the necessary properties and methods in the ISortable interface
 */
export class NumbersCollection {
  constructor(public data: number[]) {}

  /** Retrieving the data
   *  @returns this.data
   */
  get content() {
    return this.data; // initialized in our constructor above
  }

  /** Getter for length property
   * ! getter method
   * ? What is "get" before the method name?
   * :: the "get" keyword sets the function as a property "getter"
   * :: so you can reference length from an instance of this class
   * :: as something like:
   * ` const collection = new NumberCollection([0, 6, 3, -1, 22, -4]);
   * ` const length = collections.length;
   * :: You call the length property to access it via the getter function
   * :: to the end-user developer, this is just a property that is
   * :: available instead of having to call a function to get the
   * :: length, even though under the covers it IS calling a function.
   */
  get length() {
    return this.data.length;
  }

  /** note about leftIndex and rightIndex
   * ? What are "leftIndex" and "rightIndex" for?
   *
   * :: Given the following array of data that is being sorted:
   *
   * ` ["A", "b", "a", "B", "c", "D"]
   *
   * :: |_______| -> leftIndex = 0 ("A"), rightIndex = 1 ("b");
   * :: So yes, this could be shortened to only use leftIndex and
   * :: simply add one, but to be explicit, let's leave both for DX.
   * ! Note: tie-in with the original logic
   * ? Which part of the original logic does this pertain to?
   * ` this.collection[j] > this.collection[j + 1]
   */

  /** JSDoc
   *
   * @param leftIndex
   * @param rightIndex
   * @returns boolean
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  /** JSDoc
   *
   * @param leftIndex
   * @param rightIndex
   */
  swap(leftIndex: number, rightIndex: number): void {
    const leftSide = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftSide;
  }
}
