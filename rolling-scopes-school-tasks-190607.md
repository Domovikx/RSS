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

Руководство по написанию JavaScript-кода от Airbnb:   
https://github.com/airbnb/javascript   
https://github.com/leonidlebedev/javascript-airbnb (rus)  

[Вопросы и ответы к собеседованию фронтенд-разработчика на JavaScript](https://medium.com/@allaev/%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B-%D0%B8-%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%8B-%D0%BA-%D1%81%D0%BE%D0%B1%D0%B5%D1%81%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E-%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0-%D0%BD%D0%B0-javascript-9058a75710a)

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

тут есть задачи - http://jsflow.org/docs/create-exec-phase/ 

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

1. Ключевое слово <b>this</b> - всегда динамичное.   
2. Оно указывает на <b>тот объект</b> в контексте которого оно было вызвано.   
<b>Контекст</b> - окружение исполнения.   

```JS
function whereIsThis() {
  console.log('this :', this);
}
let myObject = {
  nameObject: 'myObject',
  runThis: whereIsThis      
}
// тут вызовем из глобального контекста
whereIsThis(); // this : Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
// а тут вызовем из объекта
myObject.runThis(); // this : {nameObject: "myObject", runThis: ƒ}
```

<b>this это ссылка на - объект (элемент) в котором произходит вызов (действие, событие)</b>. 

https://www.youtube.com/watch?v=UGapN-hrekw   
https://www.youtube.com/watch?v=PBI5hEnMStc   

http://qaru.site/questions/1228/how-does-the-this-keyword-work   
https://learn.javascript.ru/object-methods   
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this   

***
### 7. Apply, call, bind. What are they used for? What are the differences?   
Применить, звать, связать. Для чего они используются? Какие есть отличия?   

Все три функции являются методами (функциями, прикрепленными к объекту функции), 
которые вызывают функцию с заданым (установленным, кастомным) this контекстом.

call - вызов функции с подменой контекста - this внутри функции   
apply - вызов функции с переменным количеством аргументов и с подменой контекста   
bind - создаёт "обёртку" над функцией, которая подменяет контекст этой функции   
```JS
    let car1 = { model: 'Renault' }
    let car2 = { model: 'BMW' }
    function showDetails(color, price) {
      console.log(`${this.model} ${color} ${price}$`);
    }

    let bound = showDetails.bind(car1, 'yellow', 100);
    bound(); // Renault yellow 100$

    bound = showDetails.bind(car2);
    bound('white', 200); // Renault white 200$

    showDetails.call(car1, 'red', 300); // Renault red 300$
    showDetails.apply(car2, ['green', 400]); // Renault green 400$
```

https://www.youtube.com/watch?v=OaR9Go75hOY   
https://www.youtube.com/watch?v=UGapN-hrekw   

https://sneakbug8.ru/bind-vs-apply-and-call     
[medium.com/@stasonmars/подробно-о-методах-apply-call-и-bind-необходимых-каждому-javascript-разработчику-ddd5f9b06290](https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290)       
https://ru.stackoverflow.com/questions/426699/bind-call-apply-%D0%B2-%D1%87%D1%91%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0

***
### 8. Closure. Give an example.   
Замыкание - это функция ссылающаяся на (free variabl) свободную переменную, объявленную вне этой функции. 

Функция = блок кода + набор доступных переменных, также надо учитывать окружение фукнции.      
Замыкания - это функции, ссылающиеся на независимые (свободные) переменные (free variables).   
Независимые переменные (free variables) - это все переменные, 
которые не были переданы как параметры и не были объявлены как локальные. 

```JS
// глобальный контекст выполнения 
let c = 10; // глобальная переменная, для примера
function count() {
  // контекст функции count() - это обертка
  let c = 0; // Локальная «свободная» переменная (free variable), которая попадает в замыкание
  function operation() { // контекст функции operation()
  // function operation() - является замыканием, т.к. использует переменную 'с' объявленную вне этой функции 
    c++;
    return c; // возвращаем значение
  }
  return operation;
}
let countFirst = count();
let countSecond = count();
console.log('countFirst: ', countFirst(), countFirst(), countFirst()); // countFirst:  1 2 3
console.log('countSecond: ', countSecond(), countSecond()); // countSecond:  1 2
console.log('c :', c); // c : 10
```   

Пример контекста и независимых переменных   
![img](https://assets.htmlacademy.ru/img/blog/195/global-execution-context@1x.png);

https://www.youtube.com/watch?v=BIHziPMbaJw
https://www.youtube.com/watch?v=RPuFz93Gvpk   
https://www.youtube.com/watch?v=UsFPvkWeUgw   
https://www.youtube.com/watch?v=2zQapitrXSY   

https://medium.com/@sshambir/%D0%BE%D1%81%D0%B2%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-5b83267ef7d1
https://htmlacademy.ru/blog/useful/javascript/lets-learn-javascript-closures      
https://learn.javascript.ru/closures   
https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures   
https://habr.com/ru/post/38642/   
https://medium.com/webbdev/closures-9a20e84b62cd   

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
// пример замыкания из википедии
const add = x => y => {
  const z = x + y;
  console.log(x + '+' + y + '=' + z);
  return add(z);
};
const res = add(1)(4)(6);
// 1+4=5
// 5+6=11
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
### 10. Prototype. Differences between `__proto__` and `prototype`. Example of inheritance.
Прототип. Различия между `__proto__` и `prototype`. Пример наследования.   

Чтобы разобраться сделаем объект и посмотрим что внутри:
```JS
let foo = {
  x: 10,
  y: 20
};
foo;
/*
{x: 10, y: 20} ↴
x: 10
y: 20
__proto__: Object // Вот оно, неявное смойство которое ссылается на верховный объект-прототип
*/
```
![](http://dmitrysoshnikov.com/wp-content/uploads/basic-object.png)

В каждом объекте есть набор явных свойств и одно неявное свойство - `__proto__` которое ссылается на другой верховный объект-прототип. Прототип может быть либо объектом, либо null значением.

Если прототип не указан явно для объекта, то `__proto__` принимается значение по умолчанию - Object.prototype. Object.prototype - это объект который также имеет свойство `__proto__`, является конечным звеном цепи прототипов и имеет значение null.

```JS
let a = {
  x: 10,
  calculate: function (z) {
    return this.x + this.y + z;
  }
}; 
let b = {
  y: 20,
  __proto__: a
}; 
let c = {
  y: 30,
  __proto__: a
}; 
b.calculate(30); // 60
c.calculate(40); // 80
```
![](http://dmitrysoshnikov.com/wp-content/uploads/prototype-chain.png)

<details>
<summary>Холмс что-же такое prototype? ...элементарно Ватсон!</summary>

![](http://img.playground.ru/images/7/8/229166_elementarno-vatson.jpg)
</details>

```JS
function Foo(y) {
  this.y = y;
}
Foo.prototype.x = 10; 
Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
}; 
let b = new Foo(20);
let c = new Foo(30);
b.calculate(30); // 60
c.calculate(40); // 80
 
console.log( 
  b.__proto__ === Foo.prototype, // true
  c.__proto__ === Foo.prototype, // true  
    b.constructor === Foo, // true
    c.constructor === Foo, // true
    Foo.prototype.constructor === Foo, // true 
      b.calculate === b.__proto__.calculate, // true
      b.__proto__.calculate === Foo.prototype.calculate // true 
);
```
![](http://dmitrysoshnikov.com/wp-content/uploads/constructor-proto-chain.png)   

- Каждый конструктор имеет специальное свойство: `prototype`   
- Каждый объект созданный конструктором содержит ссылку на `prototype` своего конструктора, эта ссылка хранится в свойстве `__proto__`.   
- Сначала поиск свойства осуществляется в объекте, если оно не найдено, то поиск продолжается в цепочке прототипов.   

Примечания:   
Всё, кроме примитивов - объекты   
Функции - это вызываемые объекты   
Конструкторы - функции которые используются вместе с оператором new и предназначены для создания и инициализации новых объектов   
Цепочка прототипов - это конечная цепочка объектов, которая используется для реализации наследования и общих свойств.   
https://www.youtube.com/watch?v=0vs6WkNyzec    
https://www.youtube.com/watch?v=42ihcHT-jfM    

http://dmitrysoshnikov.com/ecmascript/javascript-the-core/ (best)   

https://techshowers.wordpress.com/2013/07/01/javascript-prototype-vs-__proto__/     
https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript    
http://qaru.site/questions/26391/good-example-of-javascripts-prototype-based-inheritance

<details> 
  
![](http://risovach.ru/upload/2016/01/mem/klichko_103711688_orig_.jpg)
</details>  

***
### 11. How to create an object without a prototype?   
Как создать объект без прототипа:    
- Для этого можно просто создать объект {}.
```JS
let empty = {};
console.log(empty.constructor);
empty; 
```
Разные способы создания объектов:
- Литеральная нотация  
```JS
Man = {
    id : 1,
    name : "Сеня",
    drinkingBeer : true
} 
```

- Оператор new или {} 
```JS
// let myCar = new Object(); // так делать плохо
let myCar = {}; // а так хорошо
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

- Ассоциативные массивы
```JS   
let person = {};   
person['firstName'] = 'Вася'; // то же что и person.name = 'Вася'   
person['lastName'] = 'Васильев';   
```

- Конструкторы объектов      
```JS
function Man(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  let phrase = "Привет";
  function getFullName() {
    return firstName + " " + lastName;
  }
  this.sayHi = () => {
    let say = phrase + ", " + getFullName();
    return say;
  }
}
let firstFriend = new Man('Иван', 'Иванович');
console.log(firstFriend);
let secondFriend = new Man('Петр', 'Петрович');
console.log(secondFriend);
console.log(secondFriend.sayHi()); // Привет, Петр Петрович
```

http://adripofjavascript.com/blog/drips/creating-objects-without-prototypes.html   

https://habr.com/ru/post/17613/   
https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects   
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create
https://metanit.com/web/javascript/4.5.php
https://metanit.com/web/javascript/4.1.php

***
### 12. Array methods that loop over the elements.   
Методы массива, которые зацикливаются на элементах.   
Вопрос не ясен...    

Методы массива:   
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array   
не понимаю фразцу `зацикливаются на элементах`   
возможно тут про это: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach   

***
### 13. “hello world”.repeating(3) -> hello world hello world hello world. How to implement?   
```JS
function repeat(str, iteration){
  let arr = new Array(iteration);
  arr.fill(str);
  return arr.join(" ");
}
console.log(repeat("hello world", 3)); // 'hello world hello world hello world'
```
```JS
// самое короткое решение  
"hello world ".repeat(3).slice(0, -1);  
```
```JS
// можно и так
    function repeat(str = "hello world", iteration = 3) {
      let newStr = str;
      for (let i = 1; i < iteration; i++) {
        newStr += (' ' + str);
      }
      return newStr;
    }
    console.log(repeat());
    console.log(repeat('a'));
```
http://studyjavascript.blogspot.com/2019/03/hello-worldrepeating3.html   

***
### 14. Browser events. Browser default actions abortion.  
События браузера. Отмена действий браузера по умолчанию.   

* Событие – это сигнал от браузера о том, что что-то произошло.    

Основные:   
<b>События мыши:</b> click, mouseover, mousedown... https://developer.mozilla.org/ru/docs/Web/API/MouseEvent   
<b>Клавиатурные события:</b> keydown, keyup... https://developer.mozilla.org/ru/docs/Web/API/KeyboardEvent   
<b>События документа:</b> load, beforeunload, unload...   
<b>События на элементах:</b> submit, focus...   

Список событий - https://www.w3schools.com/jsref/dom_obj_event.asp   
Events list from MDN - https://developer.mozilla.org/en-US/docs/Web/API/Event   

https://learn.javascript.ru/introduction-browser-events    
https://developer.mozilla.org/ru/docs/Web/Events   

* Действия браузера по умолчанию и как их отменить:   

Многие события автоматически влекут за собой действие браузера.   
Например:   
Клик по ссылке инициирует переход на новый URL.   
Нажатие на кнопку «отправить» в форме – отсылку ее на сервер.   
Двойной клик на тексте – инициирует его выделение.   

<b>Есть два способа отменить действие браузера:</b>   
Основной способ – это воспользоваться объектом события. Для отмены действия браузера существует стандартный метод <b>event.preventDefault()</b>.   
Если же обработчик назначен через onсобытие (не через addEventListener), то можно просто вернуть false из обработчика.  

Подробно про default browser action -  https://learn.javascript.ru/default-browser-action
Event.preventDefault() - https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault   

***
### 15. Event bubbling and event capturing.  
Всплытие и захват событий   

https://learn.javascript.ru/event-bubbling    
[Events bubbling и events capturing](https://habr.com/ru/post/126471/)   

***
### 16. Event delegation. Example.    
Событие делегирования. Пример.   
надо разбираться   

https://learn.javascript.ru/event-delegation

читать:   
https://davidwalsh.name/event-delegate   
https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation   

***
### 17. Write a function F so new F === F   
```JS
function F() {
  return F;
}
new F() === F // true
```

***
### 18. Function.prototype.bind polyfill.    
надо разбираться   

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

***
### 19. Object.create polyfill.   
надо разбираться   

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create    
https://learn.javascript.ru/new-prototype - не для этого, но возможно пригодится

***
### 20. Event loop.   
цикл событий или же событийный цикл   
надо разбираться   

https://www.youtube.com/watch?v=aUigiwN0NEw - Event Loop in the browser Javascript 

[JavaScript event loop в картинках](https://medium.com/@pavelbely/javascript-event-loop-%D0%B2-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%D1%85-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-a19e4d99f242)    

***
### 21. Promises. 
надо разбираться   
https://learn.javascript.ru/promise
