// data types

const text = 'hello world';
const age = 32;
const man = true
const weight = null;
let isProgrammer;

const someNumbers = [10, 20, 30, 40, 50];

const someObjects = {
  name: 'Oleg',
  age: 32,
};

const greet = function (name) {
  return `Hello, ${name}!`;
}

console.log(typeof text);
console.log(typeof age);
console.log(typeof man);
console.log(typeof weight);
console.log(typeof isProgrammer);

console.log(typeof someNumbers);
console.log(typeof someObjects);
console.log(typeof greet);


/*
Хранение по значению, это когда мы явно задали значение, например: let a = 10
При обращении к 'a' мы видим его истинное значение.

Хранение по ссылке это когда мы объявляем значение переменной не явное, а ссылается на значение
другой переменной, например:
let a = 10
let b = a

Значение для 'b' задано равное значению 'a', соответственно при обращении к 'b' она будет ссылаться на
значение 'a', при изменении 'a' мы получим и изменение 'b'

Если мы будем по ссылочному типу обращаться к массиву, то через 'b' мы можем мутировать массив 'a'
 */

const a = [2];
const b = a;
const c = 3

console.log(a); // [2]
console.log(b); // [2]

b.push(c); // к 'b' добавляем элемент 'c'
console.log(a); // выведет [2, 3]
console.log(b); // выведет [2, 3]

// тем самым видим, что мы обратились к переменной 'b', при том мутировал исходный массив 'a'
