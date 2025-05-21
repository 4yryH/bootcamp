/**
 1. Напиши функцию `getUserData`, которая возвращает промис с данными пользователя через 2 секунды.
 Затем создай цепочку промисов, которая обрабатывает эти данные и выводит результат в консоль;
 */

function getUserData() {
  return new Promise((resolve) => {
    const userData = [
      {name: 'Oleg', age: 32},
      {name: 'Alex', age: 28},
    ];

    setTimeout(() => {
      resolve(userData);
    }, 2000);
  })
}

getUserData()
  .then((data) => {
    console.log(data);
    // вернем фильтр > 30
    return data.filter(user => user.age > 30);
  })
  .then((filteredUsers) => {
    // Повторно обработаем, но уже отфильтрованный массив
    console.log('Старше 30: ', filteredUsers);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

/**
 2. Напиши две функции, каждая из которых возвращает промис с данными через 3 и 5 секунд соответственно.
 Используй такой метод промисов, чтобы дождаться выполнения обоих промисов и вывести результаты в консоль;
 */

function getAgeData() {
  return new Promise((resolve) => {
    const userAge = [
      {age: 32},
      {age: 28}
    ];

    setTimeout(() => {
      resolve(userAge);
    }, 3000);
  })
}

function getNameData() {
  return new Promise((resolve) => {
    const userName = [
      {name: 'Oleg',},
      {name: 'Alex',},
    ];

    setTimeout(() => {
      resolve(userName);
    }, 5000);
  })
}

Promise.all([getAgeData(), getNameData()])
  .then(([ages, names]) => {
    console.log('ages: ', ages);
    console.log('names: ', names);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

/**
 3. Напиши две функции, каждая из которых возвращает промис через случайное время (от 1 до 5 секунд).
 Используй такой метод промисов, чтобы вывести результат первого выполненного промиса в консоль.
 */

function getCarsData() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      resolve(`Cars получены за ${delay} мс`);
    }, delay);
  });
}

function getYearsData() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      resolve(`Years получены за ${delay} мс`);
    }, delay);
  });
}

Promise.race([getCarsData(), getYearsData()])
  .then((result) => {
    console.log('Первый промис:', result);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });
