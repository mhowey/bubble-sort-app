# My Random Thoughts and Comments

## Why Interfaces?

---

### Simple answer:

Interfaces help us describe the types and shape of a TypeScript object.

### Better answer:

Interfaces give the power to create a contract that must be met in order to "interface" with
a particular class. The Sorter class created in this tutorial is a great example of using
an interface to:

---

### Allows for Interoperability

---

Make the Sort class as generic as possible to operate with MANY different data types. This interoperability is enforced by our interface which can be seen as a "contract"
to work with it.

Any class that wants to use Sorter will need to implement:

- a getter for "content"
- a getter for "length"
- a method for compare
- a method for swap

!! and that is all that an implementing engineer would need to write. This is, of course, pretty powerful!

---

### More In-Depth Explanation

---

Allow other engineers to easily know how to use another class and enable them to provide their own implementation of the very specific functional pieces.

In the case of bubble sort, the specific sort and swap logic depending on the data structure that they are programming to this interface for.

In this case, the Sort class doesn't even need to know about any of the details of swapping and sorting logic that is needed for it
