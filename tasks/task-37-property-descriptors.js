/**
 1. Напиши объект с несколькими свойствами и сделай все свойства неизменяемыми (с помощью Object.defineProperty).
 Проверь, можно ли изменить их значения после этого;
 */

const userInfo = {};

Object.defineProperty(userInfo, 'name', {
  value: 'Oleg',
  writable: false,
});

Object.defineProperty(userInfo, 'age', {
  value: '32',
  writable: false,
});

console.log(userInfo);

userInfo.name = 'Alex';
userInfo.age = 22;

console.log(userInfo);

/**
 2. Создай объект с несколькими свойствами, где одно из них будет неперечисляемым (не должно выводиться в циклах).
 Убедись, что свойство не отображается при выводе ключей объекта через цикл for...in.
 */

const carInfo = {
  brand: 'BMW',
  model: 'X5',
  color: 'Black',
};

Object.defineProperty(carInfo, 'color', {
  enumerable: false,
});

for (let key in carInfo) {
  console.log(key);
}
