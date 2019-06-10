<details>
<summary>Question examples... ↴</summary>

1. Data types in JS. Type coercion.
2. What is hoisting?
3. Let vs var. Const.
4. Passing data by value and by reference. Exapmles.
5. `{a: 10} == {a: 10}`. What will the code return?
6. What is `this`?
7. Apply, call, bind. What are they used for? What are the differences?
8. Closure. Give an example.
9. Sum(1)(2);
10. Prototype. Differences between `__proto__` and `prototype`. Example of inheritance.
11. How to create an object without a prototype?
12. Array methods that loop over the elements.
13. `“hello world”.repeating(3)` -> `hello world hello world hello world`. How to implement?
14. Browser events. Browser default actions abortion.
15. Event bubbling and event capturing.
16. Event delegation. Example.
17. Write a function `F` so `new F === F`
18. `Function.prototype.bind` polyfill.
19. `Object.create` polyfill.
20. Event loop.
21. Promises.
  
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
### 1. Data types in JS. Type coercion.
Типы данных в JS  
Шесть типов данных: <b>number, string, boolean, null, undefined, object</b>   
для определения типа оператор - [typeof(x)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof)  

Type coercion.   
Тип принуждения (Оказание давления) (Приведение типов данных)   
<a name="type_coercion"></a>
![img](https://pbs.twimg.com/media/Cuaymi4UEAAVi2d.jpg)   
Тип принуждения означает, что, когда операнды оператора являются разными типами, один из них будет преобразован в "эквивалентное" значение другого типа операнда.   
Например: boolean == integer.   
Логический операнд будет преобразован в целое число: false становится 0, true становится 1.   

https://learn.javascript.ru/types-intro    
http://qaru.site/questions/86563/what-exactly-is-type-coercion-in-javascript   

*** 
### 2. What is hoisting?
Что такое подъем? <br>
Поднятие или hoisting — это механизм в JavaScript в котором переменные и объявления функций передвигаются вверх своей области видимости перед тем, как код будет выполнен.
   
ES 5
```JS
console.log(a); // undefined 
var a = 7;
console.log(a); // 7 
a = 5;
console.log(a); // 5
```
   
ES 6
```JS
console.log(b); // b is not defined
let b = 7;
```
```JS
let a = 1;
function hoisting(){
   let a = 2; // объявление внутри функции
   console.log(a); // 2
}
hoisting();
console.log(a); // 1
```
```JS
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

***
### 3. Let vs Var. Const.
Объявление <b>const</b> задаёт константу, то есть переменную, которую нельзя менять:    
```JS
const apple = 5;
apple = 10; // ошибка
```
У объявлений переменной через <b>let</b> есть три основных отличия от <b>var</b>:   
1. Область видимости переменной <b>let</b> – блок {...}   
```JS
var apples = 5;
if (true) {
  var apples = 10;
  alert(apples); // 10 (внутри блока)
}
alert(apples); // 10 (снаружи блока то же самое)
```
```JS
let apples = 5; // (*)
if (true) {
  let apples = 10;
  alert(apples); // 10 (внутри блока)
}
alert(apples); // 5 (снаружи блока значение не изменилось)
```
```JS
if (true) {
  let apples = 10;
  alert(apples); // 10 (внутри блока)
}
alert(apples); // ошибка!
```

2. Переменная <b>let</b> видна только после объявления.   
```JS
alert(a); // undefined
var a = 5;
```
```JS
alert(a); // ошибка, нет такой переменной
let a = 5;
```
```JS
let x;
let x; // ошибка: переменная x уже объявлена
```  

3. При использовании в цикле, для каждой итерации создаётся своя переменная.    
Переменная <b>var</b> – одна на все итерации цикла и видна даже после цикла:   
```JS
for(var i=0; i<10; i++) { /* … */ }
alert(i); // 10
```     
Каждому повторению цикла соответствует своя независимая переменная <b>let</b>.
```JS
// каждый цикл имеет свою переменную i
for(let i = 0; i<10; i++) { /* … */ }
for(let i = 0; i<10; i++) { /* … */ }
alert( i ); // ошибка: глобальной i нет
```

https://learn.javascript.ru/let-const   
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let   
          
***
### 4. Passing data by value and by reference. Exapmles.   
Передача данных по значению и по ссылке. Примеры.   

<b>number, string, boolean</b> - передаются по значению, функция получает копию данного значения.   
```JS
let a = 5, b = 7; 
b = a;
console.log(a, b); // 5 5
a = 4;
console.log(a, b); // 4 5
```
```JS
let a = 'a', b = 'b'; 
b = a;
console.log(a, b); // a a
a = 'a2';
console.log(a, b); // a2 a 
```
<b>object, array</b> - передаются по ссылке. <br>
```JS
let user = { name: "Вася" }; // в переменной - ссылка на объект
let admin = user; // скопировали ссылку
console.log(user, admin, admin.name); // {name: "Вася"} {name: "Вася"} "Вася"
admin.name = 'Сеня'; // передаем новое значение
console.log(user.name); // Сеня
```
Клонирование объектов
```JS
let user = { name: "Вася", age: 30 };
let clone = {}; 
for (let key in user) {
   clone[key] = user[key];
}
clone.name = "Петя";
// user {name: "Вася", age: 30}
// clone {name: "Петя", age: 30}
```
Копирование Array по ссылке 
```JS
let arr1 = ['a','b'];
let arr2 = arr1;
arr2.push('c'); 
console.log(arr1, arr2); // ["a", "b", "c"] ["a", "b", "c"]
```
Копирование Array по значению
```JS
let arr1 = ['a','b'];
let arr2 = [...arr1];
arr2.push('c'); 
console.log(arr1, arr2); // ["a", "b"] ["a", "b", "c"]
```    
https://metanit.com/web/javascript/3.7.php   
https://learn.javascript.ru/object-reference   
http://qaru.site/questions/10741/copying-array-by-value-in-javascript

***
### 5. {a: 10} == {a: 10}. What will the code return?   
false   
потому что это объект, объект не сравнивается ни с чем ([см.Таблица сравнения типов](#type_coercion)).

***
### 6. What is `this`?   
https://learn.javascript.ru/object-methods   
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this   
https://www.youtube.com/watch?v=PBI5hEnMStc   

***
### 7. Apply, call, bind. What are they used for? What are the differences?   

***
### 8. Closure. Give an example.   
Замыкания.   
https://www.youtube.com/watch?v=UsFPvkWeUgw <br>
https://learn.javascript.ru/closures <br>
https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures <br>

*** 
### 9. Sum(1)(2);   
```JS
sum(1)(2); // 3
function sum(a) {
  return function(b) {
    return a + b;
  };
} 
```

<details>
<summary>умные решения... ↴</summary>

```JS
sum(1)(1)(1)(1); // 4
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
```JS
// интересное решение
function add(a) {
  let curry = (b) => {
    a += b;
    return curry;
  }
  curry.toString = () => a
  return curry;
}
console.log(add(1));
console.log(add(1)(2));
```
```JS
// умное универсальное решение
function sum(...params) {
  let s = params.reduce((a, b) => a + b);
  function innerSum(...innerParams) {
    return sum(...innerParams.concat(s));
  };
  innerSum.toString = innerSum.valueOf = function() {
    return s;
  }
  return innerSum;
}
console.log(sum(1, 2)(3, 4)(5, 6));
console.log(sum(1)(2)(3)(4)(5)(6));
console.log(sum(1)(2, 3)(4, 5, 6));
```

</details>  

[Преобразование объектов: toString и valueOf - learn.javascript.ru/object-conversion](https://learn.javascript.ru/object-conversion) <br>
[Метод valueOf() возвращает примитивное значение указанного объекта.](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)    
[Метод toString() возвращает строку, представляющую исходный код функции.](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)

https://stackoverflow.com/questions/5832891/variadic-curried-sum-function   
http://qaru.site/questions/218785/variadic-curried-sum-function   

***
### 10. Prototype. Differences between __proto__ and prototype. Example of inheritance.

***
### 11. How to create an object without a prototype?   
Как создать объект без прототипа   
https://habr.com/ru/post/17613/   
самое простое - Литеральная нотация   
Создаем наш объект с использованием литеральной нотации   
```JS
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
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create   
JavaScript предоставляет разработчикам возможность создавать объекты и работать с ними.   
Для этого существуют следующие приёмы:   
- Оператор new   
- Литеральная нотация   
- Конструкторы объектов   
- Ассоциативные массивы   

https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects   

***
### 12. Array methods that loop over the elements.   
Методы массива, которые зацикливаются на элементах. - не понял, что надо сделать   
возможно тут про это: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

***
### 13. “hello world”.repeating(3) -> hello world hello world hello world. How to implement?   
http://studyjavascript.blogspot.com/2019/03/hello-worldrepeating3.html   
"hello world ".repeat(3).slice(0, -1); самое короткое решение   

***
### 14. Browser events. Browser default actions abortion.   
https://learn.javascript.ru/introduction-browser-events   
https://developer.mozilla.org/ru/docs/Web/Events   

***
### 15. Event bubbling and event capturing.   
https://learn.javascript.ru/event-bubbling    
[Events bubbling и events capturing](https://habr.com/ru/post/126471/)

***
### 16. Event delegation. Example.    
Событие делегирования. Пример.    
https://learn.javascript.ru/event-delegation

***
### 17. Write a function F so new F === F    
не понятно

***
### 18. Function.prototype.bind polyfill.    
тоже не понятно, возможно это:    
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

***
### 19. Object.create polyfill.   
тоже не понимаю пока, это оно или нет:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create    
https://learn.javascript.ru/new-prototype - не для этого, но возможно пригодится

***
### 20. Event loop.    
[JavaScript event loop в картинках](https://medium.com/@pavelbely/javascript-event-loop-%D0%B2-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%D1%85-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-a19e4d99f242)    
тоже пока не понимаю

***
### 21. Promises.    
https://learn.javascript.ru/promise
