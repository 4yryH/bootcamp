/**
 1. Создай класс Counter, который будет иметь приватное свойство count.
 Напиши публичные методы для увеличения, уменьшения и отображения значения счетчика;
 */

class Counter {
  #count = 0;

  plus() {
    this.#count++;
    console.log(`Текущий счетчик: ${this.#count}`);
  }

  minus() {
    this.#count--;
    console.log(`Текущий счетчик: ${this.#count}`);
  }

  getCount() {
    console.log(`Текущий счетчик: ${this.#count}`);
  }
}

const counter = new Counter();

counter.plus(); // 1
counter.plus(); // 2
counter.minus() // 1
counter.getCount() // 1

// counter.#count = 3; // SyntaxError: Private field '#count' must be declared in an enclosing class

/**
 2. Создай класс EmailValidator со статическим методом isValid(email),
 который будет проверять, является ли строка корректным email (достаточно простой проверки на наличие символа @);
 */

class EmailValidator {
  static isValid(email) {
    if (!email.includes('@')) {
      console.log(`Введен некорректный формат email ${email}`);
    } else {
      console.log(`Все ок`)
    }
  }
}

EmailValidator.isValid('oleg@mail.com');
EmailValidator.isValid('olegmail.com');

/**
 3. Создай класс Order с приватным методом #calculateTotal(),
 который будет рассчитывать общую стоимость заказа.
 Сделай публичный метод, который возвращает результат этого расчета, и вызывай его через созданный экземпляр класса.
 */

class Order {
  #orderPrice = 0;

  #calculateTotal(price) {
    this.#orderPrice += price;
    console.log(`Добавлена стоимость: ${price}`)
  }

  addPrice(price) {
    this.#calculateTotal(price);
  }

  getOrderPrice(){
    console.log(`Общая стоимость заказа: ${this.#orderPrice}`);
  }
}

const order = new Order();

order.addPrice(1000);
order.addPrice(500);

order.getOrderPrice();
