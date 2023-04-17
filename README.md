## Bubble Sort TypeScript Example

This repo are some of my "code notes" while walking through Stephen Grider's course on Udemy called "Typescript: The Complete Developer's Guide". Here's a link if you want to take the course: [Stephen Grider's TypeScript Course Link](https://www.udemy.com/course/typescript-the-complete-developers-guide/)

## My Thoughts are in the Comments

Throughout this tutorial, I have been writing extensive (sometimes, repetitive, sorry!) comments throughout the codebase. Yes this makes looking at the code as a whole somewhat of a pain in the butt. Sorry! Hint: You can always collapse the comment code blocks to one line so you can see the code as a whole more effectively.

## Better Comments

(**This is very much OPTIONAL**, and nothing will "break" if you don't use the Better Comments plugin!)

I recommend installing the ["Better Comments" plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments).

Why? because I will be using to it's syntax for highlighting specific comments extensively throughout the comments inside this codebase (which there will be many!). Better comments is an extensible comment colorizer that allows comment authors to configure custom tokens that apply specific styles to comments (color, bold, italic, underline, etc).

For instance: an exclamation mark "!" signifies an "Alert" and gives the text a RED color, while question mark "?" at the beginning of a line signifies a "Query", and of course a "todo" is a note about some refactoring or additional coding that needs to be done on some section of code immediately following it.

## First Run -> `npm install && tsc`

This installs any dependencies that are specified in package.json. It also does the initial compile of the typescript files.

## Run the Program -> `npm start`

The Scripts section of the package json has scripts setup so you can simply run `npm start` and both `tsc -w` and `build/index.js` will run concurrently. This will watch all the files and output to the terminal.

## Bubble Sort Example

This is an example of building a Bubble sort and refactoring it to be re-usable across multiple use cases.

## Sorter\_\* Lesson # Filenaming

I have named each version of the bubble sort class file in the following way. If the file name for Sorter is `Sorter_83` - that means that is the state of the Sorter Class at the end of lesson 83.
