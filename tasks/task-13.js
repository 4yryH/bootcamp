/**
 1. Создай объект, ключи в котором будут описывать тебя. Например, твое имя, возраст,
 увлечения и т.д. Обязательно используй разные типы данных:
 имя - строка, возраст - число, хобби - массив и т.д.
 Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);
 */

const aboutMe = {
  name: 'Oleg',
  age: 32,
  hobbies: ['read books', 'video games'],
}

for (let key in aboutMe) {
  console.log(aboutMe[key]);
}

console.log(Object.keys(aboutMe));
console.log(Object.values(aboutMe));
console.log(Object.entries(aboutMe));

/**
 2. В объект из предыдущего пункта:
 - добавь новое свойство;
 - измени значение существующего свойства;
 - удали любое свойство.
 И снова выведи все свойства объекта в консоль разными способами!
 */

aboutMe.car = 'Yes';
aboutMe.age = 33;
delete aboutMe.hobbies;

for (let key in aboutMe) {
  console.log(aboutMe[key]);
}

console.log(Object.keys(aboutMe));
console.log(Object.values(aboutMe));
console.log(Object.entries(aboutMe));
