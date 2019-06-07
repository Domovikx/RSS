rolling-scopes-school - tasks

### Question examples:
   * Data types in JS. Type coercion.
   * What is hoisting?
   * Let vs var. Const.
   * Passing data by value and by reference. Exapmles.
   * `{a: 10} == {a: 10}`. What will the code return?
   * What is `this`?
   * Apply, call, bind. What are they used for? What are the differences?
   * Closure. Give an example.
   * Sum(1)(2);
   * Prototype. Differences between `__proto__` and `prototype`. Example of inheritance.
   * How to create an object without a prototype?
   * Array methods that loop over the elements.
   * `“hello world”.repeating(3)` -> `hello world hello world hello world`. How to implement?
   * Browser events. Browser default actions abortion.
   * Event bubbling and event capturing.
   * Event delegation. Example.
   * Write a function `F` so `new F === F`
   * `Function.prototype.bind` polyfill.
   * `Object.create` polyfill.
   * Event loop.
   * Promises.

Full name and contacts of the mentor who will interview you can be found in this 

### Passing the interview
1. You should contact the mentor personally. Contact details will be announced through Discord.
2. At the request of the mentor, the interview can take place online or face-to-face.
3. During the interview mentor:
  - asks questions;
  - gets answers;
  - adds/corrects/explains/gives the right answer, if necessary.

### The interview should be passed before 16 June 2019. Take into account that mentor can be busy (vacation, business trip, workload and etc.), so contact him as soon as possible.

---

   * Data types in JS. Type coercion. <br>
   Типы данных в JS <br>
   Шесть типов данных - https://learn.javascript.ru/types-intro
   
   * What is hoisting? <br>
   Что такое подъем? <br>
   [Поднятие](https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%9F%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5)

* Let vs var. Const.<br>
https://learn.javascript.ru/let-const <br>
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let <br>
https://nuancesprog.ru/p/3274/

* Passing data by value and by reference. Exapmles. <br>
Передача данных по значению и по ссылке. Exapmles. <br>
https://learn.javascript.ru/object-reference <br>
https://metanit.com/web/javascript/3.7.php

* {a: 10} == {a: 10}. What will the code return? <br>
false <br>
потому что это два разных объекта

* What is `this`? <br>
https://learn.javascript.ru/object-methods <br>
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this

* Apply, call, bind. What are they used for? What are the differences?

* Closure. Give an example.

* Sum(1)(2); <br>
function sum(a) {
  return function(b) {
    return a + b;
  };
}

* Prototype. Differences between __proto__ and prototype. Example of inheritance.

* How to create an object without a prototype?

* Array methods that loop over the elements. <br>
Методы массива, которые зацикливаются на элементах. - не понял, что надо сделать <br>
возможно тут про это: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

* “hello world”.repeating(3) -> hello world hello world hello world. How to implement? <br>
http://studyjavascript.blogspot.com/2019/03/hello-worldrepeating3.html <br>
"hello world ".repeat(3).slice(0, -1); самое короткое решение

* Browser events. Browser default actions abortion. <br>
https://learn.javascript.ru/introduction-browser-events <br>
https://developer.mozilla.org/ru/docs/Web/Events

* Event bubbling and event capturing.<br>
https://learn.javascript.ru/event-bubbling <br>
[Events bubbling и events capturing](https://habr.com/ru/post/126471/)

* Event delegation. Example. <br>
Событие делегирования. Пример. <br>
https://learn.javascript.ru/event-delegation

* Write a function F so new F === F <br>
не понятно

* Function.prototype.bind polyfill.

* Object.create polyfill.

* Event loop. <br>
[JavaScript event loop в картинках](https://medium.com/@pavelbely/javascript-event-loop-%D0%B2-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%D1%85-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-a19e4d99f242) <br>
тоже пока не понимаю

* Promises. <br>
https://learn.javascript.ru/promise
