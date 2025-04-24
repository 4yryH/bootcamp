const city = 'Tyumen'; // Мой город
const weather = 9; // Погода за бортом
const firstName = 'Oleg'; // Моё имя
const lastName = 'Tishinskikh'; // Моя фамилия

// Вывод в консоль имени и фамилии, город проживания и погоды
console.log(`Hi! My name is ${firstName} ${lastName}. I live in the city of ${city}. It's ${weather} outside now.`);


// Математическое выражение суммы двух чисел умноженных на третье число
const mathExpression = function (a, b, c) { // Функция принимающая 3 аргумента
  const answer = (a + b) * c // объявление переменной и что она должна сделать с входными данными

  // вывод в консоль результата
  console.log(`Сумма чисел ${a} и ${b} умноженная на ${c} будет равна: ${answer}`);
}

// вызов функции и передача аргументов, ответ придет в консоль
mathExpression(3, 3, 6);
