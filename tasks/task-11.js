// 1 задание
// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:
// function multiply(a,b){
//   return a*b;
// }
// const person ={name:'Alice',age:30};
// if(person.age>18){console.log('Adult');}
// else{console.log('Minor');}

function multiply(a, b) {
  return a * b;
}

const person = {name: 'Alice', age: 30};
if (person.age > 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

// 2 задание
// Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
// Перепишите следующий код, используя понятные и логичные имена переменных и функций:
// function x(a, b) {
//   let c = a * b;
//   return c;
// }
// let d = x(5, 10);

function multiplyNumbers(firstNumber, secondNumber) {
  let multiplicationResult = firstNumber * secondNumber;
  return multiplicationResult;
}

let product = multiplyNumbers(5, 10);

// 3 задание
// Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
// разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:
// let items = ["apple", 'banana', "orange"];
// let price = {apple: 1, banana: 2, orange:3 };
// const total = price['apple'] + price["banana"] + price.orange;
//
// function calculateTotal(items) {
//   return items.reduce(function(total, item) {return total + item.price; }, 0); }

//Можно вообще объединить item и price в один массив и внутрь запихнуть объекты {название: ..., цена: ...}
//Но оставил как есть, только переименовал let -> const
//Убрал расчет total перед функцией, не понял зачем он там, мы же в функции считаем это, да и если список дополнится.
//Переписал функцию, не совсем понял, как она работала, точнее она не работала, я пробовал ее вызвать),
// написал по-своему
const items = ['apple', 'banana', 'orange'];
const price = {
  apple: 1,
  banana: 2,
  orange: 3
};

function calculateTotal(items, priceList) {
  return items.reduce((total, item) => total + priceList[item], 0);
}

console.log(calculateTotal(items, price));

// 4 задание
// Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
// Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
// функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
// функция должна возвращать сообщение "Форма успешно отправлена".

const validateForm = (loginInfo) => { // принимает объект с данными
  if (!loginInfo.name.trim() || !loginInfo.email.trim() || !loginInfo.password.trim()) { //проверка на заполнение и пробел
    return `Данные введены неверно! Проверьте корректность введенных данных`; // return сразу завершит функцию
  }
  return `Форма успешно отправлена`;
}

const login = {
  name: 'oleg',
  email: 'oleg@gmail.com',
  password: 'pas',
}
console.log(validateForm(login));
