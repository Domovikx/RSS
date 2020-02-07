task:   
- https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codewars.md

codewars:

- http://www.codewars.com/kata/opposite-number
Very simple, given a number, find its opposite.
Examples:
1: -1
14: -14
-34: 34
```js
const opposite = number => -number;
```
- http://www.codewars.com/kata/basic-mathematical-operations   
Your task is to create a function that does four basic mathematical operations.   
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.   
Examples   
basicOp('+', 4, 7)         // Output: 11   
basicOp('-', 15, 18)       // Output: -3   
basicOp('*', 5, 5)         // Output: 25   
basicOp('/', 49, 7)        // Output: 7   
```js
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
```
- http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
Input: Array of elements   
["h","o","l","a"]   
Output: String with comma delimited elements of the array in th same order.   
"h,o,l,a"   
```js
const printArray = array => array.join();
```
```js
const printArray = array => array.toString();
```
- http://www.codewars.com/kata/transportation-on-vacation   
Transportation on vacation   
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.   
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.   
Every day you rent the car costs 40. If you rent the car for 7 or more days, you get 50 off your total. Alternatively, if you rent the car for 3 or more days, you get 20 off your total.   
Write a code that gives out the total amount for different days(d).    
```js
function rentalCarCost(day) {
  const rent = 40;
  if (day >= 7) return (day * rent - 50);
  if (day >= 3) return (day * rent - 20);
  return day * rent;
}
```
- http://www.codewars.com/kata/get-the-middle-character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.   
Examples:   
Kata.getMiddle("test") should return "es"   
Kata.getMiddle("testing") should return "t"   
Kata.getMiddle("middle") should return "dd"   
Kata.getMiddle("A") should return "A"   
Input   
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.   
Output   
The middle character(s) of the word represented as a string.   
```JS
function getMiddle(str) {
    const length = str.length;
    const i = str.length / 2;
    if (length % 2 === 0) return str.slice(i - 1, i + 1);
    if (length % 2 === 1) return str.slice(i, i + 1);
}
```
- http://www.codewars.com/kata/partition-on
Write a function which partitions a list of items based on a given predicate.   
After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).   
NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.   
For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.   
```JS
function partitionOn(pred, items) {
  const isFals = items.filter(v => !pred(v));
  const isTrue = items.filter(v =>  pred(v));
  items.splice(0); items.push(...isFals); items.push(...isTrue);
  return isFals.length;
}
```
```JS
function partitionOn(isEven, items) {
    let arr = [], arrF = [], arrT = [];

    for (const i of items) isEven(i) ? arrT.push(i) : arrF.push(i);
    arr = [...arrF, ...arrT];
    
    for (const i in items) items[i] = arr[i];
    return arrF.length;
}
```

- http://www.codewars.com/kata/word-count
Word Count   
Can you realize a function that returns word count from a given string?   
You have to ensure that spaces in string is a whitespace for real.   
What we want and finish of work:  
```JS 
function countWords(str) {
    str = str.split(/[\s\.\?]+/);
    let count = 0;
    for (const i of str) {
        if (i != '') count++;
    }
    return count;
}
```
```JS
const countWords = str => str.split(/\S+/).length - 1;
```

- http://www.codewars.com/kata/remove-first-and-last-character-part-two
- http://www.codewars.com/kata/implement-a-filter-function
- http://www.codewars.com/kata/prefill-an-array
- http://www.codewars.com/kata/cross-product-of-vectors
- http://www.codewars.com/kata/sequence-generator-1
- http://www.codewars.com/kata/base-conversion/
- http://www.codewars.com/kata/closures-and-scopes
- http://www.codewars.com/kata/a-function-within-a-function
- http://www.codewars.com/kata/can-you-keep-a-secret
- http://www.codewars.com/kata/using-closures-to-share-class-state
- http://www.codewars.com/kata/a-chain-adding-function
- http://www.codewars.com/kata/function-cache
- http://www.codewars.com/kata/function-composition
- http://www.codewars.com/kata/function-composition-1
- http://www.codewars.com/kata/stringing-me-along
- http://www.codewars.com/kata/i-spy
- http://www.codewars.com/kata/calculating-with-functions
- http://www.codewars.com/kata/santaclausable-interface
- http://www.codewars.com/kata/new-with-apply
- http://www.codewars.com/kata/extract-nested-object-reference
- http://www.codewars.com/kata/array-helpers
- http://www.codewars.com/kata/replicate-new
- http://www.codewars.com/kata/sum-of-digits-slash-digital-root/
- http://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance
- http://www.codewars.com/kata/fun-with-es6-classes-number-3-cuboids-cubes-and-getters