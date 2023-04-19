/**
 * We want this class to be eligible to be used for sorting so we need to make
 * sure that is contains all the necessary properties of the ISortable interface
 */

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  get content() {
    return this.head;
  }

  /** QUESTION about void return type
   * ? If :void indicates that we aren't expecting to return anything, then why can
   * ? we return from the code below event though we specified a return type of void?
   */
  /** JSDoc
   * @param data
   * @returns
   */
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    // while tail has a defined "next" property, not undefined
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index is out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftSide = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftSide;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
  /** ANSWER: can't return anything
   * :: Yes, the above block does return. But notice there is NOTHING after the return
   * :: other than the semi-colon? This is just being used as an "escape hatch" to
   * :: end execution of the function early and make sure it doesn't continue on, it's
   * :: being used in a similar way to how a type guard might be used.
   */
  // constructor(public data: number[]) {}

  // get content(): any {
  //   return "the content here";
  // }
  // get length(): number {
  //   return this.data.length;
  // }
}
