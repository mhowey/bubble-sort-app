export class Sorter {
  /** QUESTION: What's the difference?
   * ? What is the difference betweem the following ways to initialize a class
   * ? property and
   */
  /** CONTENT: expand to answer above question.
   * ! First approach:
   * `collection: number[];
   * ` constructor(collection: number[]) {
   * ` this.collection = collection;
   * `}
   *
   * ! Second approach:
   * `constructor(public collection: number[]) {}
   */
  /** ANSWER: They are equivalent!
   * :: Nothing! They are equivalent and peform the same things.
   * :: See the next question and answer for more information about what is exactly
   * :: happening under the covers.
   *
   */

  /** QUESTION: What do these constructor implementations do?
   * ? What does the constructor syntax below actually do in this one line of code?
   */
  constructor(public collection: number[]) {}
  /** ANSWER: more concise syntax
   * :: Either approach to setting up the constructor and property accomplishes a couple of things.
   * :: It's the class constructor implementation receiving a "collection" which is an array of numbers.
   * :: BUT!! -> it ALSO initializes the "collection" property without having it
   * :: setup outside the constructor, and then initialized inside the constructor
   * :: function as an array of numbers.
   */

  /** QUESTION: What's the issue with this?
   * ? What is the primary issue going on with the following implementation of a bubble sort?
   */
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const LeftSide = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = LeftSide;
        }
      }
    }
  }
  /** ANSWER: not re-usable
   * :: This code is on the "more extreme side" of not being re-usable.
   * :: It is very specific to sorting an array of numbers and would not
   * :: work as it is for other data types such as strings or linked lists.
   * :: This is the primary problem worked through the subsequent refactoring
   * :: versions.
   */
}
