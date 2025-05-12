/**
 1. Создай объект со свойствами и методом, который использует `this` для доступа к этим свойствам.
 Затем присвой этот метод другой переменной и вызовите её. Объясни своими словами, что произошло;
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

student2.sayHi() // Выведет: Hello, Oleg! Age: 32

// взял свой код из предыдущей задачи))
// Вызов метода напрямую (student2.sayHi()):
// Стрелочная функция внутри setTimeout сохраняет контекст this из внешней функции
// this ссылается на объект student2

const sayHiFunc = student2.sayHi;
sayHiFunc(); // Выведет: Hello, undefined! Age: undefined

// Стрелочные функции не имеют своего this, они берут его из внешнего контекста
// При прямом вызове student2.sayHi() внешний контекст — объект student2
// При присваивании метода переменной контекст теряется
// Можно сделать привязку контекста через bind()

/**
 2. Объясни, почему в примере ниже в первом случае выводится имя, а во втором - undefined.
 Как сделать так, чтобы в методе delayedGreet тоже выводилось имя (без использования call, apply или bind)?

 const student = {
 name: 'Alice',

 greet: function() {
 console.log(`Hello, ${this.name}!`);
 },

 delayedGreet: function() {
 setTimeout(this.greet, 1000);
 }
 };

 student.greet() // Hello, Alice
 student.delayedGreet() // Hello, undefined
 */

const student = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
  delayedGreet: function () {
    setTimeout(this.greet, 1000);
  }
};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined

// Ну здесь аналогичный пример, что описано в примере выше, при вызове greet мы ссылаемся на контекст student
// При вызове setTimeout у нас теряется контекст и поэтому возвращается undefined

// что бы отработало без явной привязки через bind, можно было просто для setTimeout сделать вызов через
// стрелочную функцию, у нее нет своего this и она бы ссылалась на внешний контекст,
// а это был бы объект student

const student3 = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
  delayedGreet: function () {
    setTimeout(() => this.greet(), 1000);
  }
};

student3.delayedGreet();

/**
 3. Напиши функцию и вызови её с разными контекстами, используя `call`, `apply` и `bind`;
 */

function congratulation(action, item) {
  console.log(`Hi ${this.name}, congratulations on your ${action} of the ${item}`);
}

const person = {
  name: 'Oleg',
};

congratulation('purchase', 'car');
congratulation.call(person, 'selling', 'car');
congratulation.apply(person, ['selling', 'car']);

const boundCongratulation = congratulation.bind(person);

boundCongratulation('purchase', 'car');

/**
 4. Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()?
 Объясни, почему так произошло. Как это можно изменить?

 function sayHello() {
 console.log('Hello, ' + this.name)
 }

 const admin = {
 name: 'Bob'
 };

 const user = {
 name: 'John'
 };

 const sayHelloToAdmin = sayHello.bind(admin)
 sayHelloToAdmin()

 const sayHelloToUser = sayHelloToAdmin.bind(user)
 sayHelloToUser()
 */

function sayHello() {
  console.log('Hello, ' + this.name);
}

const admin = {
  name: 'Bob'
};

const user = {
  name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin);
sayHelloToAdmin();

const sayHelloToUser = sayHelloToAdmin.bind(user);
sayHelloToUser();

// Метод bind нельзя использовать дважды для изменения контекста функции.
// Повторный вызов bind на уже привязанной функции не изменяет контекст.
// sayHelloToAdmin = sayHello.bind(admin) создаёт новую функцию, где this навсегда привязан к объекту admin
// Это жёсткая привязка, которую нельзя переопределить
// Можно сделать новую функцию из оригинала

const sayHelloToAdmin2 = sayHello.bind(admin);
const sayHelloToUser2 = sayHello.bind(user);

sayHelloToAdmin2();
sayHelloToUser2();
