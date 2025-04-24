// первое задание
// первый пример
const mathExpression = 2 * 2 + 2;

console.log(`Ответ на первый пример: ${mathExpression}`);


// второй пример
const mathExpression2 = Math.round(Math.pow(Math.sin(54) * (Math.cos(16)), 2));

console.log(`2 пример:`);
console.log(`Синус 54 равен: ${Math.sin(54)}`);
console.log(`Косинус 16 равен: ${Math.cos(16)}`);
console.log(`Произведение sin(54) cos(16) равно: ${(Math.sin(54)) * (Math.cos(16))}`);
console.log(`Возводим результат в квадратную степень: ${Math.pow((Math.sin(54)) * (Math.cos(16)), 2)}`);

console.log(`Округленный ответ на второй пример: ${mathExpression2}`);


// третий пример
const mathExpression3 = Math.round(( // изначально задаем округление до целого, считаем выражение в скобках
    ( // скобки для дроби, что бы не потерять порядок вычисления
      (16 * Math.sqrt(13.2 * 71.9)) // числитель
      /
      (2.4 / Math.pow(7, 4)) // знаменатель
    )
    +
    (Math.pow(3, Math.sqrt(49))) // Возведение 3 в степень квадратного корня 49 (т.е. 7)
  ) // конец выражения в скобках
  *
  Math.pow(2, 7)); // возведение 2 в 7 степень

console.log(`3 пример:`)
console.log(`Числитель первой дроби: ${16 * Math.sqrt(13.2 * 71.9)}`);
console.log(`Знаменатель первой дроби: ${2.4 / Math.pow(7, 4)}`);
console.log(`Решение первой дроби: ${(16 * Math.sqrt(13.2 * 71.9)) / (2.4 / Math.pow(7, 4))}`);
console.log(`Возведение 3 в степень квадратного корня из 49: ${Math.pow(3, Math.sqrt(49))}`);
console.log(`Сумма в скобках равна: ${((16 * Math.sqrt(13.2 * 71.9)) / (2.4 / Math.pow(7, 4))) + (Math.pow(3, Math.sqrt(49)))}`);
console.log(`2 в 7 степени равно: ${Math.pow(2, 7)}`);
console.log(`Перемножаем результат в скобках на 2 в 7 степени: ${(((16 * Math.sqrt(13.2 * 71.9)) / (2.4 / Math.pow(7, 4))) + (Math.pow(3, Math.sqrt(49)))) * (Math.pow(2, 7))}`);

console.log(`Округленный ответ на третий пример: ${mathExpression3}`);

// второе задание
const a = 42;
const b = 23;
const c = 32;

const checkEven = (number) => {
  if (number % 2 === 0) { // проверка делением на 2 и сравнение его остатка к нулю
    console.log(`Число ${number} четное`);
  } else {
    console.log(`Число ${number} нечетное`);
  }
};

checkEven(a);
checkEven(b);
checkEven(c);


// 3 задание
const name = '';

if (typeof name === 'undefined' || !name) { // проверка на объявление переменной и потом на присутствие значения
  console.log(`Hello, Guest!`);
} else {
  console.log(`Hello, ${name}!`);
}
