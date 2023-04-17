export class Sorter {

  /**
   * Note about the following commented out constructor. There is nothing
   * wrong with the fomatting and setup of the following class property
   * and constructor function. SG utilizes the simplified/combined
   * syntax shown in the uncommented constructor that is currently being
   * used below.
   */
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  /**
   * constructor(@param collection)
   *
   * ! Note about this constructor style:
   * This odd-looking syntax accomplishes a couple of things. It's the class's
   * constructor function that is showing that it receives a collection array of
   * numbers in it's signature,
   *
   * BUT!! -> it ALSO initializes the "collection" property without having it
   * setup outside the constructor and then initialized inside the constructor
   * function for each property, in this case - JUST "collection", an array of numbers.
   * Therefore, though somewhat less obvious as the traditional syntax
   * of setting up your properties that need to be passed in to the constructor
   * as an argument and then assigning each one using 'this.[argument] = [property_name]'
   * we can just get it all done in one line. Arguably to me, this is a
   * way to make your code more explicit, AS LONG AS THE ENGINEER UNDERSTANDS
   * and can "grock" this method of setting up class properties that are passed in.
   *
   * So perhaps in a project with more junior devs you would use the more verbose
   * pattern of setup then assignment in the constructor syntax because this
   * syntax is less obvious, though I think the public keyword in the signature
   * of the constructor kind of gives this one away...
   */

  // The following should be the same as the above constructor, but simpler.

  constructor(public collection: number[]) {}

  sort(): void {
    // this is equivalent but more concise to the above comment
    const { length } = this.collection;

    // nested for loops to do our bubble sort
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
}
