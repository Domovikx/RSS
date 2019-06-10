<details>
<summary>Question examples... ↴</summary>

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

Ссыка на таск: https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/interview-corejs.md

Контакты ментора: http://app.rs.school/mentor-contacts?course=rs-2019-q1

</details>

## Ответы:

1. **Data types in JS. Type coercion.** <br>
   Типы данных в JS <br>
   Шесть типов данных - https://learn.javascript.ru/types-intro
   
   <b>number, string, boolean, null, undefined, object</b> <br>
   для определения типа оператор - [typeof(x)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof)
      
   Type coercion. <br>
   Тип принуждения (Оказание давления) (Приведение типов данных) <br>
   ![img](https://pbs.twimg.com/media/Cuaymi4UEAAVi2d.jpg)<br>
   Тип принуждения означает, что, когда операнды оператора являются разными типами, один из них будет преобразован в "эквивалентное" значение другого типа операнда. <br>
   Например: boolean == integer. <br>
   Логический операнд будет преобразован в целое число: false становится 0, true становится 1. 
   http://qaru.site/questions/86563/what-exactly-is-type-coercion-in-javascript
   
2. **What is hoisting?** <br>
   Что такое подъем? <br>
   Поднятие или hoisting — это механизм в JavaScript в котором переменные и объявления функций передвигаются вверх своей области видимости перед тем, как код будет выполнен.
   
   ES 5
   ```
   console.log(a); // undefined 
   var a = 7;
   console.log(a); // 7 
   a = 5;
   console.log(a); // 5
   ```
   
   ES 6
   ```
   console.log(b); // b is not defined
   let b = 7;
   ```
   ```
   let a = 1;
   function hoisting(){
      let a = 2; // объявление внутри функции
      console.log(a); // 2
   }
   hoisting();
   console.log(a); // 1
   ```
   ```
   let a = 1;
   function hoisting(){
      a = 2; // переопределение значения
      console.log(a); // 2
   }
   hoisting();
   console.log(a); // 2
   ```
   
   
   
   
   
   [Поднятие](https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%9F%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5) <br>
[Разбираемся с “поднятием” (hoisting) в JavaScript](https://medium.com/@stasonmars/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%D0%BC-hoisting-%D0%B2-javascript-7d2d27bc51f1) <br>
[Область видимости в JavaScript и «поднятие» переменных и объявлений функций - habr.com/ru/post/127482](https://habr.com/ru/post/127482/)

   True JS 5. Hoisting - https://www.youtube.com/watch?v=e6YB6ehg5g8   
   True JS 21. Области видимости внутри функции, hoisting - https://www.youtube.com/watch?v=3UXqvjmJkA0

3. **Let vs var. Const.**<br>

   Объявление <b>const</b> задаёт константу, то есть переменную, которую нельзя менять:    
      ```
      const apple = 5;
      apple = 10; // ошибка
      ```
   У объявлений переменной через <b>let</b> есть три основных отличия от <b>var</b>: <br>
    - Область видимости переменной <b>let</b> – блок {...}
      ```
      var apples = 5;
        if (true) {
          var apples = 10;
          alert(apples); // 10 (внутри блока)
        }
      alert(apples); // 10 (снаружи блока то же самое)
      ```
      ```
      let apples = 5; // (*)
      if (true) {
        let apples = 10;
        alert(apples); // 10 (внутри блока)
      }
      alert(apples); // 5 (снаружи блока значение не изменилось)
      ```
      ```
      if (true) {
        let apples = 10;
        alert(apples); // 10 (внутри блока)
      }
      alert(apples); // ошибка!
      ```
    - Переменная <b>let</b> видна только после объявления.
      ```
      alert(a); // undefined
      var a = 5;
      ```
      ```
      alert(a); // ошибка, нет такой переменной
      let a = 5;
      ```
      ```
      let x;
      let x; // ошибка: переменная x уже объявлена
      ```
      
    - При использовании в цикле, для каждой итерации создаётся своя переменная.
      Переменная <b>var</b> – одна на все итерации цикла и видна даже после цикла:
      ```
      for(var i=0; i<10; i++) { /* … */ }
      alert(i); // 10
      ```     
      Каждому повторению цикла соответствует своя независимая переменная <b>let</b>.
      ```
      // каждый цикл имеет свою переменную i
      for(let i = 0; i<10; i++) { /* … */ }
      for(let i = 0; i<10; i++) { /* … */ }
      alert( i ); // ошибка: глобальной i нет
      ```      
      
      https://learn.javascript.ru/let-const <br>
      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let <br>
          
4. **Passing data by value and by reference. Exapmles.** <br>
Передача данных по значению и по ссылке. Exapmles. <br>
https://learn.javascript.ru/object-reference <br>
https://metanit.com/web/javascript/3.7.php

5. {a: 10} == {a: 10}. What will the code return? <br>
  false <br>
  потому что это два разных объекта  

6. **What is `this`?** <br>
https://learn.javascript.ru/object-methods <br>
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this <br>
https://www.youtube.com/watch?v=PBI5hEnMStc <br>

7. **Apply, call, bind. What are they used for? What are the differences?**

8. **Closure. Give an example.** <br>
Замыкания. <br>
https://www.youtube.com/watch?v=UsFPvkWeUgw <br>
https://learn.javascript.ru/closures <br>
https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures <br>

1. Sum(1)(2); <br>
```
function sum(a) {
  return function(b) {
    return a + b;
  };
} 
```
```
function sum (n) { 
    let v = function (x) {
        return sum (n + x);
    };
    v.valueOf = v.toString = function () {
        return n;
    };
    return v;
}
```
[Преобразование объектов: toString и valueOf - learn.javascript.ru/object-conversion](https://learn.javascript.ru/object-conversion) <br>
[Метод valueOf() возвращает примитивное значение указанного объекта.](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) <br>
[Метод toString() возвращает строку, представляющую исходный код функции.](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)

10. Prototype. Differences between __proto__ and prototype. Example of inheritance.

11. How to create an object without a prototype? <br>
Как создать объект без прототипа <br>
https://habr.com/ru/post/17613/ <br>
самое простое - Литеральная нотация <br>
Создаем наш объект с использованием литеральной нотации <br>
```
MyObject = {
    id : 1,
    name : "Sample",
    boolval : true,
    getName : function()
    {
        return this.name;
    }
} 
```
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create <br>
JavaScript предоставляет разработчикам возможность создавать объекты и работать с ними. Для этого существуют следующие приёмы: <br>
Оператор new <br>
Литеральная нотация <br>
Конструкторы объектов <br>
Ассоциативные массивы <br>

https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects <br>

12. Array methods that loop over the elements. <br>
Методы массива, которые зацикливаются на элементах. - не понял, что надо сделать <br>
возможно тут про это: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

1. “hello world”.repeating(3) -> hello world hello world hello world. How to implement? <br>
http://studyjavascript.blogspot.com/2019/03/hello-worldrepeating3.html <br>
"hello world ".repeat(3).slice(0, -1); самое короткое решение

1. Browser events. Browser default actions abortion. <br>
https://learn.javascript.ru/introduction-browser-events <br>
https://developer.mozilla.org/ru/docs/Web/Events

1. Event bubbling and event capturing.<br>
https://learn.javascript.ru/event-bubbling <br>
[Events bubbling и events capturing](https://habr.com/ru/post/126471/)

1. Event delegation. Example. <br>
Событие делегирования. Пример. <br>
https://learn.javascript.ru/event-delegation

1. Write a function F so new F === F <br>
не понятно

1. Function.prototype.bind polyfill. <br>
тоже не понятно, возможно это: <br> 
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

1. Object.create polyfill.<br>
тоже не понимаю пока, это оно или нет:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create <br>
https://learn.javascript.ru/new-prototype - не для этого, но возможно пригодится

1. Event loop. <br>
[JavaScript event loop в картинках](https://medium.com/@pavelbely/javascript-event-loop-%D0%B2-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%D1%85-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-a19e4d99f242) <br>
тоже пока не понимаю

1. Promises. <br>
https://learn.javascript.ru/promise
