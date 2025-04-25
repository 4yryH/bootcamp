/**
 1. Проверь, содержится ли строка "fun" в строке "JavaScript is fun!";
 */

const someText = 'JavaScript is fun!'; // исходный текст
const searchText = 'fun'; // что ищем

console.log(someText.includes(searchText)); // должен вывести true


/**
 2. Попробуй написать условие, которое выполняется только в случае, если переменная имеет одно из falsy значений;
 */

const name = '';

/**
 воспользовался кодом из прошлых заданий, проверка на объявление переменной и потом на присутствие значения
 К примеру !name проверяется на falsy, как отсутствие значения вернет false
  */
if (typeof name === 'undefined' || !name) {
  console.log(`Hello, Guest!`);
} else {
  console.log(`Hello, ${name}!`);
}


/**
 3. Напиши шаблонную строку, которая включает переменные firstName, lastName и occupation,
 и выводит сообщение вроде "Hello, my name is John Doe. I am a software developer.";
 */

let firstName = 'Oleg';
let lastName = 'Tishinskikh';
let occupation = 'software developer';

const greeting = `Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`

console.log(greeting);

/**
 4. Сравни null и undefined строго (===) и не строго (==), выведи результаты в консоль.
 Объясни своими словами, почему получились такие результаты 🙂
 */

console.log(null === undefined);
/* возвращает false, потому что разные типы данных,
null - явное отсутствие значение, при этом он является object
undefined - неопределенное значение, при этом тип данных undefined */

console.log(null == undefined);
/* При нестрогом равенстве эти значения равны друг другу и не равны
никаким другим значениям. Это специальное правило языка.*/

console.log(`null type of ${typeof null}`);
console.log(`undefined typ of ${typeof undefined}`);

/**
 5. Выведи в консоль результат выражения 1 + '1'. Да, этот удивительный JS...
 И снова попрошу тебя объяснить своими словами, что произошло🙂
 */

console.log(1 + '1');
/* Как в одном меме было: Здравствуйте, мне 2 книги по JavaScript по 9$. Хорошо, с вас 99$;
В данном случае произошла конкатенация значений, так работает только с "+", если бы поставили
любой другой математический оператор, то данные были бы преобразованы к number и произошло вычисление
 */
