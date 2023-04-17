// importing a specific version of Sorter after lesson 83...
import { Sorter } from "./Sorter_83";

const testCollection = [22, 100, 12, 12.4, -12, 11, 10, -2, 0, -5, 3];
/** console.log input
 * Here we'll console out the initial collection value by spreading it into an Array
 * * We should see this in the console:
 * `INPUT COLLECTION:  [22, 100, 12, 12.4, -12,  11, 10,   -2, 0,  -5,  3]
 * ...which is exactly the same as the "testCollection" array above.
 */
console.log("INPUT COLLECTION: ", [...testCollection]);
const sorter = new Sorter(testCollection);
sorter.sort();

/** console.log output
 * Here we'll console out the collection after it has been sorted:
 * * We should see this in the console:
 * `OUTPUT COLLECTION:  [-12, -5,  -2,  0, 3, 10,  11, 12, 12.4, 22, 100]
 * ...which is the correct sorting order we would expect from our bubble sort!
 */
console.log("OUTPUT COLLECTION: ", sorter.collection);

