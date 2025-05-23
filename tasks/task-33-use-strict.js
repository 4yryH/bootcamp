/**
 1. Напиши функцию, которая добавляет два числа.
 Включи строгий режим и попробуй создать переменную внутри функции
 без использования ключевого слова. Исправь код, чтобы он работал в строгом режиме;
 */
// использовал в самом начале, поэтому комментами расписал, что и где будет выходить
"use strict";

function add1(a, b) {
  result = a + b; // выдаст ошибку, переменная не объявлена
  return result;
}

console.log(add1(2, 3));

function add2(a, b) {
  let result = a + b; // тут будет ок
  return result;
}

/**
 2. Создай функцию, которая принимает два параметра с одинаковыми именами.
 Включи строгий режим и исправь ошибку, чтобы функция работала корректно;
 */

function greet(name, name) { // выдаст ошибку, одноименные аргументы
  return "Hello, " + name;
}

function greet(firstName, lastName) { // тут будет ок
  return "Hello, " + firstName + " " + lastName;
}

/**
 3. Напиши код, в котором функция выводит значение this в консоль.
 Включи строгий режим и проанализируй, как изменилось значение this;
 */

function showThis() {
  console.log(this);
}

showThis(); // В нестрогом режиме this === глобальному объекту (window в браузере)

function showThis() {
  console.log(this);
}

showThis(); // В строгом режиме this === undefined

/**
 4. Попробуй удалить встроенное свойство объекта (например, метод toString у объекта) в строгом режиме.
 Объясни, почему это не работает, и что нужно сделать, чтобы избежать подобных ошибок.
 */

delete Object.prototype.toString; // нельзя удалить встроенное свойство в строгом режиме

/**
 Не пытаться удалить встроенные методы и свойства,
 особенно у прототипов стандартных объектов, их изменение может повлиять на все объекты в коде.

 Использовать наследование или переопределять метод в конкретном объекте,
 не трогая глобальный прототип. Т.е. мы можем создать собственный метод, класс...
 Пример из моего RPG про котэ
 */

const hero = {
  attack() {
    console.log("Hero attacks!");
  }
};

hero.attack(); // Hero attacks!
delete hero.attack; // Удаляем метод
console.log(hero.attack); // undefined
