import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

import { Sorter } from "./Sorter";

const arrayOfNumbers = [22, 100, 12, 12.4, -12, 11, 10, -2, 0, -5, 3];
const unsortedString = "ZzzZwwWpqstabcefd";
const unsortedLinkedList = new LinkedList();

unsortedLinkedList.add(200);
unsortedLinkedList.add(-10);
unsortedLinkedList.add(343);
unsortedLinkedList.add(-343);
unsortedLinkedList.add(0);
unsortedLinkedList.add(-22);

const numbersCollection = new NumbersCollection(arrayOfNumbers);
const charactersCollection = new CharactersCollection(unsortedString);

// let's output
console.log("LinkedList +++>", unsortedLinkedList.print());

/** console.log input
 * Here we'll console out the initial collection value by spreading it into an Array
 * * We should see this in the console:
 * `INPUT COLLECTION:  [22, 100, 12, 12.4, -12,  11, 10,   -2, 0,  -5,  3]
 * ...which is exactly the same as the "testCollection" array above.
 */

// initialize Sorter instances for each data structure type
let linkedList = new Sorter(unsortedLinkedList);
let sorterNumbersArr = new Sorter(numbersCollection);
let sorterString = new Sorter(charactersCollection);

// run the sort method of the Sorter instances
linkedList.sort();
sorterNumbersArr.sort();
sorterString.sort();

/** console.log output
 * Here we'll console out the collection after it has been sorted:
 * * We should see this in the console:
 * `OUTPUT COLLECTION:  [-12, -5,  -2,  0, 3, 10,  11, 12, 12.4, 22, 100]
 * ...which is the correct sorting order we would expect from our bubble sort!
 */
console.log("OUT ll => ", unsortedLinkedList.print());
console.log("OUT arr", sorterNumbersArr.collection.content);
console.log("OUT arr", sorterString.collection.content);
