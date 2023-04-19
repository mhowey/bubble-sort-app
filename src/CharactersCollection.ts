/**
 * We want this class to be eligible to be used for sorting so we need to make
 * sure that is contains all the necessary properties of the ISortable interface
 */
export class CharactersCollection {
  arrayOfStrings: string[];
  constructor(public data: string) {
    this.arrayOfStrings = this.data.split("");
  }

  get content() {
    return this.data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  // TODO: The following logic does not take into account capitals versus lowercase
  // TODO: write logic to handle putting uppercase characters first
  swap(leftIndex: number, rightIndex: number): void {
    const saveLeft = this.arrayOfStrings[leftIndex];
    this.arrayOfStrings[leftIndex] = this.arrayOfStrings[rightIndex];
    this.arrayOfStrings[rightIndex] = saveLeft;
    this.data = this.arrayOfStrings.join("");
  }
}
