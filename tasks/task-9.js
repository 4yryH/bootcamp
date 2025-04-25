/**
 1. Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;
 */

// объявляем функцию, принимающую числа через Rest преобразующую их в массив
const getAverageValue = function (...numbers) {
  const sum = numbers.reduce((acc, val) => { // через reduce аккумулируем сумму элементов массива
    return acc + val;
  });
  return sum / numbers.length; // Делим сумму на длину массива
}

console.log(getAverageValue(1, 2, 3, 4, 5));

/**
 2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна)
 и возвращает строку с этой информацией, используя деструктуризацию;
 */

// Создадим объект для дальнейшей его передачи при вызове функции
const someObject = {
  name: 'Oleg',
  age: 32,
  country: 'Russia',
}

// создаем функцию
const getUserInfo = function (userInfo) {
  //Начинаем деструктуризацию
  const {name, age, country} = userInfo;
  // возвращаем строку с параметрами после деструктуризации
  return `Имя пользователя: ${name}. Возраст: ${age}. Страна: ${country}`
}

console.log(getUserInfo(someObject));

/**
 3. Создай объект с вложенными объектами и массивами. Используй деструктуризацию,
 чтобы извлечь несколько значений на разных уровнях вложенности;
 */

let aboutMe = {
  name: 'Oleg',
  age: 32,
  country: 'Russia',
  pets: ['cat', 'dog', 'parrot'],
  drinksFavorites: {
    coffee: 'glace',
    tea: 'green',
    soda: 'mirinda',
  }
}

const {name, age, country, pets: [cat, dog, parrot], drinksFavorites: {coffee, tea, soda}} = aboutMe;

console.log(name);
console.log(age);
console.log(country);
console.log(cat);
console.log(soda);

/**
 4. Используй оператор `spread` для создания нового массива,
 который включает все элементы исходного массива и добавляет
 несколько новых элементов в начале и в конце;
 */

const someArray = ['rain', 'sunny'];
const newSomeArray = ['cloudy', ...someArray, 'windy'];

console.log(someArray);
console.log(newSomeArray);

/**
 5. Используй оператор `rest` для создания функции, которая принимает объект с параметрами
 и возвращает новый объект без одного указанного параметра.
 */

const weather = {
  windy: 'spring',
  hot: 'summer',
  wet: 'autumn',
  cold: 'winter',
}

const getWeatherRest = function (object) {
  const {wet, ...rest} = object;
  return rest;
}

console.log(getWeatherRest(weather));
