export class Sorter {
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // the following should be the same as above constructor, but simpler
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
