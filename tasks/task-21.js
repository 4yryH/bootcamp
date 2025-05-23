/**
 1. Напиши функцию, которая создает локальную переменную и выводит её значение.
 Попробуй получить доступ к этой переменной вне функции и объясни, что произошло;
 */

function showLocalVariable() {
  const localVar = "Я локальная переменная";
  console.log("Внутри функции:", localVar); // выведет перемененную в консоль
}

showLocalVariable(); // выведет результат функции

// Закомментировал, что бы остальной код работал
// console.log(localVar);
// Выдаст ошибку, нет доступа к переменной объявленной внутри функции т.к.
// она является локальной и доступна лишь внутри функции

/**
 2. Создай блок с условием и объяви переменную внутри него.
 Попробуй получить доступ к этой переменной вне блока и объясни результат;
 */

const a = 1;

if (a) {
  const blockVar = "Я переменная внутри блока";
  console.log(blockVar); // выведет перемененную в консоль
}

// Закомментировал, что бы остальной код работал
// console.log(blockVar);
// Аналогично выдаст ошибку, нет доступа к этой переменной,
// т.к. она находится внутри блока и доступ к ней лишь внутри этого блока

/**
 3. Изучи, что такое hoisting в JavaScript и расскажи своими словами,
 что это такое и какие проблемы с ним связаны. Приведи примеры :)
 */

// Это использование переменной или функции до ее объявления, т.е. поднятие выше
// Лучше так не делать, поведение может оказаться непредсказуемым и там,
// где мы ждем значение может прилететь undefined в случае с var,
// в случае const и let мы получим ошибку инициализации переменной, они находятся пока в некой мертвой зоне.
// Код читается сверху вниз и на моменте исполнения кода у нас нет объявления переменной.
// Что касается функций:
// Function Declaration поднимается полностью (можно вызывать до объявления).
// Function Expression ведёт себя как переменная (зависит от var/let/const).
// Что бы избежать проблем, лучше объявлять переменные до их использования, а функцию объявить как декларативную.
// Примеры:
//
// Закомментировал, что бы остальной код работал
// function hoistDemo() {
//   console.log(name); // undefined
//   var name = "Alice";
// }
// hoistDemo();
//
// function safeDemo() {
//   console.log(name); // ReferenceError
//   let name = "Bob";
// }
// safeDemo();
//
// // Работает (поднимается вся функция)
// foo();
// function foo() {
//   console.log("Поднято!");
// }
//
// // Не работает (поднимается только объявление переменной bar)
// bar();
// var bar = function() {
//   console.log("Не поднято :(");
// };

/**
 4*. Творческое задание - попробуй изобразить свое понимание областей видимости, нарисовать иллюстрацию к этой теме.
 */
//
// ┌───────────────────────────────────────┐
// │          Глобальная область           │
// │   let global = "Я везде!";            │
// │   var oldVar = "Я тоже глобальная";   │
// │                                       │
// │   ┌───────────────────────────────┐   │
// │   │  Функция outer()              │   │
// │   │  let outerVar = "Я в outer";  │   │
// │   │                               │   │
// │   │   ┌───────────────────────┐   │   │
// │   │   │  Блок if { }          │   │   │
// │   │   │  const blockVar = 42; │   │   │
// │   │   └───────────────────────┘   │   │
// │   │                               │   │
// │   │   ┌───────────────────────┐   │   │
// │   │   │  Функция inner()      │   │   │
// │   │   │  console.log(outerVar)│   │   │
// │   │   └───────────────────────┘   │   │
// │   └───────────────────────────────┘   │
// └───────────────────────────────────────┘

// Глобальная область:
// Видны все переменные (global, oldVar)

// Функция outer():
// Видит свои переменные (outerVar) + глобальные
// Не видит blockVar из блока if и переменные inner()

// Блок if {}:
// const/let существуют только внутри блока
// Полностью изолированная зона

// Функция inner():
// Имеет доступ к outerVar (замыкание)
// Не видит blockVar из соседнего блока
