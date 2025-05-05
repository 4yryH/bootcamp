/**
 1. Создай объект student с вложенными объектами и массивами.
 Затем создай поверхностную копию этого объекта (разными способами!)
 и измени вложенные структуры (массивы, объекты) у копии, распечатай их.
 Затем распечатай те же свойства у оригинала, чтобы увидеть,
 как на нем отразились изменения. Объясни своими словами, что произошло;
 */

const student = {
  name: 'Oleg',
  age: 32,
  country: 'Russia',
  pets: ['cat', 'dog', 'parrot'],
  drinksFavorites: {
    coffee: 'glace',
    tea: 'green',
    soda: 'mirinda',
  },
}

const studentCopyAssign = Object.assign(student, {});

const studentCopySpread = {...student};

console.log('object original:', student);
console.log('object copy assign:', studentCopyAssign);
console.log('object copy spread:', studentCopySpread);

studentCopyAssign.pets.push('snake');
studentCopySpread.drinksFavorites.soda = 'sprite';

console.log('object original after:', student);
console.log('object copy assign after:', studentCopyAssign);
console.log('object copy spread after:', studentCopySpread);

//Произошло копирование поверхностное, сами данные внутри объекта остались ссылочными,
// т.к. под них не выделилась другая, новая, ячейка памяти и соответственно при изменении
// копии мы обращаемся к исходной ячейке памяти и изменяем ее, поэтому мы видим изменения
// во всех копиях объекта

/**
 2. Создать копию объекта, внутри которого есть методы (функции),
 с помощью использовать JSON методов. Затем попробуй вызывать метод у копии объекта.
 Объясни своими словами, что произошло;

 Пример объекта с методом:
 const user = {
 name: "Alice",
 age: 30,
 address: {
 city: "Wonderland",
 zip: "12345"
 },
 sayHi: () => console.log('Hello, Alice!')
 };
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
  sayHi: () => console.log(`Hello, Oleg!`)
}

const studentCopyJSON = JSON.parse(JSON.stringify(student2));

console.log('studentCopyJSON:', studentCopyJSON);

studentCopyJSON.age = 99;

console.log('student2 original after:', student2);
console.log('studentCopyJSON after:', studentCopyJSON);

// При копировании мы видим ту самую потерю функции sayHi, при копировании через метод JSON
// мы теряем функции и символы. Так же произошло глубокое копирование объекта.
// При изменении данных в объекте, например age, мы видим, что исходный объект не изменился.
// Так произошло, потому что при вызове методов JSON мы создаем совершенно новый объект, который
// записывается в новую ячейку памяти и не имеет в дальнейшем отношения к его исходному оригиналу

/**
 3*. Проанализируй и разбери функцию глубокого копирования из урока (function deepCopy).
 Покрой каждую строчку кода комментариями, которые объясняют, что делает этот кусок кода и зачем.
 То есть после этого задания у тебя должно сложиться полное понимание того, как работает эта функция,
 чтобы в дальнейшем ты смог ее применить!

 - задание требует самостоятельного изучения темы, которую мы еще не проходили - рекурсии + гуглинг незнакомых методов.

 */

//создаем функцию, которая на себя принимаем какой-то объект
function deepCopy(obj) {
  // проверяем тип данных на null и другие типы данных, примитивы,
  // на null проверяем отдельно, потому что это ж исключение
  // другие типы данных, например, может на входе просто
  // пришло число или строка, значит мы ее же и вернем обратно
  if (obj === null || typeof obj !== 'object') {
    // если выполняется, то возвращаем обратно, если все таки объект, то идем дальше
    return obj;
  }
  // создаем переменную, в которую и будем копировать, так же проверим массив или объект,
  // массив тоже своего рода является объектов в JS, но немного с другой структурой,
  // имеет упорядоченность, длину и другие методы работы
  const copy = Array.isArray(obj) ? [] : {};
  // пробегаем по ключам через цикл
  for (let key in obj) {
    // проверяем на принадлежность самому объекту
    if (obj.hasOwnProperty(key)) {
      // Что бы понять рекурсию, нужно понять рекурсию))
      // здесь мы вызываем рекурсию и будем ходить по кругу, копируя вложенности на всю глубину
      // т.е. мы идем по первому кругу, забираем данные, идем во второму кругу и доходим до примитивных данных,
      // на которые проверяем в самом начале, или же идем еще на круг,
      // пока не дойдем до тех самых данных, именно так и будут пройдены все уровни вложенности
      copy[key] = deepCopy(obj[key]);
    }
  }
  // Нуи сам возврат нашей копии
  return copy;
}

// По сути получается, что мы создаем совершенно другой объект и записываем в него данные из другого объекта,
// можно сказать вручную, но через автоматизацию этого процесса

const original = {a: 1, b: {c: 2}};
const deepCopyObj = deepCopy(original);
deepCopyObj.b.c = 3;

console.log('original.b.c: ', original.b.c); // 2
console.log('deepCopyObj.b.c', deepCopyObj.b.c);//

const user = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: "12345"
  }
};

// deepCopy - это функция для глубокого копирования, которую вам предстоит реализовать 🙂
const deepCopyUser = deepCopy(user);
deepCopyUser.address.city = "New Wonderland";

console.log('user.address.city', user.address.city); // Wonderland
console.log('deepCopyUser.address.city)', deepCopyUser.address.city); // New Wonderland
