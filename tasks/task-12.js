/**
 1. Найдите с помощью break points ошибку в коде этой функции и исправьте ее:
 function hasEvenNumber(arr) {
 let foundEven = false;
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 foundEven = true;
 } else if (arr[i] % 2 !== 0) {
 foundEven = false;
 }
 }
 return foundEven;
 }

 console.log(hasEvenNumber([1, 3, 4, 5])); // Ожидается: true
 */
// для удобства создал test.html
// Через break points посмотрел как он ходит по циклу, он находит четное число, присваивает true,
// но идет дальше по циклу и последнее число нечетное и он переписывает значение на false.
// Сделал return в ветке if, что бы при нахождении четного сразу выходил из цикла и возвращал true
// надеюсь правильно понял задачу)
function hasEvenNumber(arr) {
  let foundEven = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return foundEven = true;
    } else if (arr[i] % 2 !== 0) {
      foundEven = false;
    }
  }
  return foundEven;
}

console.log(hasEvenNumber([1, 3, 4, 5])); // Ожидается: true

/**
 2. Найдите с помощью debugger ошибку в коде этой функции и исправьте ее:
 function calculateAverage(numbers) {
 let sum = 0;
 for (let i = 0; i <= numbers.length; i++) {
 sum += numbers[i];
 }
 return sum / numbers.length;
 }

 console.log(calculateAverage([2, 4, 6])); // Ожидается: 4
 */
//На выходе должно быть среднее значение
// Убрал = из i <= numbers.length, иначе он уходил на лишнюю итерацию и получаем sum = NaN,
// так произошло, потому что у нас массив из 3 чисел, в цикле мы пытались получить 4 число.
// Из-за его отсутствия мы получаем undefined и пытаемся его сложить с number, в результате
// получаем not a number.
// Длина массива считается с 1, а индекс в массиве с 0,
// поэтому неправильно ставить в этом цикле <=
function calculateAverage(numbers) {
  debugger;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage([2, 4, 6])); // Ожидается: 4

/**
 3. Найдите с помощью console.log ошибку в коде этой функции и исправьте ее:
 function findLargestNumber(arr) {
 let largest = 0;
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] > largest) {
 largest = arr[i];
 }
 }
 return largest;
 }
 console.log(findLargestNumber([-10, -20, -30])); // Ожидается: -10
 */

// должна выдать наибольшее число
// Тут должно получиться что-то подобное bubble sort, но более короткое без внутреннего цикла и нового массива
// нам нужно занести в переменную первое число и сравнивать в цикле все числа с ним.
// Если в цикле будет число больше, чем у нас в переменной, тогда в переменную
// должно присвоиться новое число
// Поменял изначально для largest присвоить первое число из массива
// начинать цикл не с 0, а с 1 индекса
// дополнил массив чисел для теста
function findLargestNumber(arr) {
  let largest = arr[0];
  console.log('largest: ' + largest);
  for (let i = 1; i < arr.length; i++) {
    console.log('arr[i] в цикле: ' + arr[i]);
    if (arr[i] > largest) {
      largest = arr[i];
      console.log("largest новое значение: " + largest);
    }
  }
  return largest;
}

console.log(findLargestNumber([-10, -20, 3, 5, -30])); // Ожидается: 5
