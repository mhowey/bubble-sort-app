import { Sorter } from "./Sorter";

/** Make LinkedList Eligible for Sorting
 * We want this class to be eligible to be used for sorting so we need to make
 * // sure that is contains all the necessary properties of the ISortable interface
 * sure that it implements all of the abstract methods defined in Sorter()
 */

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

/** QUESTIONS and ANSWERS
 * ? What do we get by extending the abstract class Sorter?
 * :: We get the sort() method that is in the abstract class and we also
 * :: get checking to make sure that we are implementing all of the
 * :: required abstract classes in the inheriting class.
 *
 * ? What restrictions doe sthis put on the inheriting class (i.e. NumbersCollection)
 * :: It just requires that the child class implement the abstract
 * :: methods from the parent class. This is similar to how an
 * :: interface works in some ways (see comments on line 4)
 */
export class LinkedList extends Sorter {
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
}
