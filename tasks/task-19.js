/**
 1. Напиши функцию, которая принимает массив чисел, совершает над ними любую
 математическую операцию и возвращает новый массив, содержащий результаты этих операций,
 используя стрелочные функции;
 */

const someArr = [1, 2, 3, 4, 5];

// просто через мап пробежать по массиву и увеличить каждый элемент на 1
const calculatePlusOne = (arr) => arr.map(el => el + 1);

console.log(calculatePlusOne(someArr))

/**
 2. Создай объект с методом, который использует стрелочную функцию внутри
 метода `setTimeout` для вывода значения свойства объекта через 1 секунду;
 */

const student2 = {
  name: 'Oleg',
  age: 32,
  country: 'Russia',
  pets: ['cat', 'dog', 'parrot'],
  drinksFavorites: {
    coffee: 'glace',
    tea: 'green',
    soda: 'mirinda',
  },
  sayHi: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}! Age: ${this.age}`)
    }, 1000)
  }
}

student2.sayHi()

/**
 3. Реализуй функцию высшего порядка*, которая принимает функцию и массив,
 и применяет эту функцию ко всем элементам массива, используя стрелочные функции.
 */

// воспользуюсь функцией из первой задачи, немного ее модернизирую,
// что бы в мап прилетала функция мат действия

const mathFnToArray = (fn, arr) => arr.map(fn);

const square = (x) => x * x;

const half = (x) => x / 2;

console.log(mathFnToArray(square, someArr));
console.log(mathFnToArray(half, someArr));
