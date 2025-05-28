/**
 1. Напиши класс Book, который имеет поля title, author и pages.
 Добавь метод для вывода краткой информации о книге;
 */

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getInfo() {
    console.log(`Info book: title - ${this.title}, author - ${this.author}, pages - ${this.pages}`);
  }
}

const bookDigitalFortress = new Book('Digital Fortress', 'Dan Brown', 401);

bookDigitalFortress.getInfo()

/**
 2. Создай класс User с полями name и email, методом displayInfo,
 который выводит информацию о пользователе.
 Создай несколько экземпляров и вызови метод displayInfo;
 */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayInfo() {
    console.log(`User info: name - ${this.name}, email - ${this.email}`);
  }
}

const user1 = new User('Oleg', 'oleg@mail.com');
const user2 = new User('Alex', 'alex@mail.com');
const user3 = new User('David', 'david@mail.com');

user1.displayInfo();
user2.displayInfo();
user3.displayInfo();

/**
 3. В классе Rectangle из примера добавь геттер perimeter, который вычисляет и возвращает периметр прямоугольника.
 Добавь сеттер height. Он должен проверять, что устанавливаемое значение высоты height больше 0.
 Если значение не положительное, то выводится сообщение об ошибке в консоль, а высота остается неизменной.
 */

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set width(value) {
    if (value <= 0) {
      console.error('Ширина должна быть положительным числом.');
    } else {
      this._width = value;
    }
  }

  get width() {
    return this._width;
  }

  // моя часть кода
  get perimeter() {
    return (this.height + this.width) * 2
  }

  set height(value) {
    if (value <= 0) {
      console.error('Высота должна быть положительным числом.');
    } else {
      this._height = value;
    }
  }

  get height() {
    return this._height;
  }
}

const myRect = new Rectangle(5, 10);
console.log(myRect.area); // 50
myRect.width = -3; // Ширина должна быть положительным числом.
console.log(myRect.width); // 5
// моя часть кода
console.log(myRect.perimeter); // 30
myRect.height = -3; // Высота должна быть положительным числом.
console.log(myRect.height); // 10
