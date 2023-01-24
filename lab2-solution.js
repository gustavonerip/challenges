/* How Much is True?
Create a function which returns the number of true values there are in an array.
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0


Return 0 if given an empty array.
All array items are of the type bool (true or false). */

const numbers = [true, false, false, true, false];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  console.log(value.length);
}