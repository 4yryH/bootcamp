/**
 1. Напиши функцию `safeDivide`, которая принимает два числа и возвращает результат их деления.
 Если второй аргумент равен нулю, функция должна бросать ошибку с сообщением "Деление на ноль невозможно".
 Используй `try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль;
 */

function safeDivide(first, second) {
  try {
    if (second === 0) {
      throw new Error('Деление на ноль невозможно');
    }
    return first / second;
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
}

console.log(safeDivide(100, 0));
console.log(safeDivide(100, 2));


/**
 2. Напиши функцию `transfromJSON`, которая принимает строку в формате JSON
 и возвращает объект. Используй `try...catch` для обработки возможных ошибок
 при парсинге JSON и выведи сообщение об ошибке в консоль;
 */

function transformJSON(jsonString) {
  try {
    return parsed = JSON.parse(jsonString);
  } catch (error) {
    console.error('Ошибка при парсинге JSON:', error.message);
    return null;
  }
}

const validJSON = '{"name": "Alice", "age": 30}';
const invalidJSON = '{"name": "Bob", "age":}';

console.log(transformJSON(validJSON));
console.log(transformJSON(invalidJSON));

/**
 3. Напиши функцию `checkAccess`, которая принимает возраст пользователя.
 Если возраст меньше 18, функция должна бросать ошибку с сообщением "Доступ запрещен".
 Используйте `try...catch` для обработки ошибок и выведи сообщение об ошибке в консоль.
 */

function checkAccess(age) {
  try {
    if (age < 18) {
      throw new Error('Доступ запрещен');
    }
    console.log(`Доступ предоставлен`)
  } catch (error) {
    console.error('Вам не исполнилось 18 лет:', error.message);
  }
}

console.log(checkAccess(10));
console.log(checkAccess(18));
