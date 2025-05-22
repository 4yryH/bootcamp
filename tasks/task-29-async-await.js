/**
 1. Напиши асинхронную функцию `delay`, которая принимает один аргумент - количество миллисекунд,
 и возвращает промис, который разрешается (резолвится) через заданное количество времени.
 Используй `async/await` для ожидания этого промиса и выведите сообщение
 "Задержка завершена" после завершения ожидания;
 */

async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Задержка завершена');
    }, ms);
  });
}

async function callDelay() {
  const message = await delay(2000);
  console.log(message);
}

callDelay()

/**
 2. Напиши асинхронную функцию `fetchUserData`, которая делает запрос к фейковому API (любому)
 и возвращает данные пользователя. Используй функцию fetch (подробнее о fetch - тут.).
 */

async function fetchUserData(url) {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

//url из примера https://doka.guide/js/fetch/
fetchUserData('http://jsonplaceholder.typicode.com/posts')
  .then(json =>
    console.log('Данные загружены', json))

  .catch(err => console.log('Ошибка загрузки данных: ', err));


// сломанный url
fetchUserData('ht://jsonplaceholder.typicode.com/posts')
  .then(json =>
    console.log('Данные загружены', json))

  .catch(err => console.log('Ошибка загрузки данных: ', err));
