import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

import { Sorter } from "./Sorter";

const arrayOfNumbers = [22, 100, 12, 12.4, -12, 11, 10, -2, 0, -5, 3];
const unsortedString = "ZzzZwwWpqstabcefd";
const linkedList = new LinkedList();

linkedList.add(200);
linkedList.add(-10);
linkedList.add(343);
linkedList.add(-343);
linkedList.add(0);
linkedList.add(-22);

const numbersCollection = new NumbersCollection(arrayOfNumbers);
const charactersCollection = new CharactersCollection(unsortedString);

// let's output
console.log("LinkedList +++>", linkedList.print());

/** No Longer Create Sorter Instances
 * ? What advantages did we get from converting Sorter into an abstract class?
 *
 * :: We no longer need to instantiate a new Sorter class instance
 * :: each time we want to use it because everything has been
 * :: refactored so that the Sorter class is an abstract class
 * :: that must be extended by children (i.e. CharactersCollection, LinkedList,
 * :: NumbersCollection) that promises to implement all of the
 * :: necessary abstract functions and properties of the Sorter class.
 *
 * ! no longer needed:
 * //initialize Sorter instances for each data structure type
 * //let linkedList = new Sorter(unsortedLinkedList);
 * //let sorterNumbersArr = new Sorter(numbersCollection);
 * //let sorterString = new Sorter(charactersCollection);
 */

/** Change as to how Sorter.sort() is Called
 * ! no longer needed:
 * run the sort method of the Sorter instances
 * // linkedList.sort();
 * // sorterNumbersArr.sort();
 * // sorterString.sort();
 *
 * ? So how is sort being called now?
 * :: The sort method is directly on the instance of the various
 * :: data structure instances because they inherit sort from
 * :: the Sorter abstract parent class.
 */
numbersCollection.sort();

/** Correct console.log output
 * Here we'll console out the collection after it has been sorted:
 * * We should see the following in the console:
 * ` OUT arr:  [-12, -5,  -2,  0, 3, 10,  11, 12, 12.4, 22, 100]
 * ` OUT char:  ZzzZwwWpqstabcefd
 * ` OUT LinkedList:
 * ` -343
 * ` -22
 * ` -10
 * ` 0
 * ` 200
 * ` 343
 * :: ...the correct order expected from bubble sort.
 */
console.log("OUT arr: ", numbersCollection.content);
console.log("OUT char: ", charactersCollection.content);
console.log("OUT LinkedList:"); // linkedList has it's own print() method that outputs directly to the console
linkedList.sort();
linkedList.print();
