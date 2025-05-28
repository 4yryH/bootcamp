/**
 1. Создай класс Car с конструктором, который принимает марку и модель автомобиля.
 Добавь метод для вывода информации об автомобиле. Создай несколько экземпляров класса и выведи их информацию;
 */

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getCarInfo() {
    console.log(`Марка: ${this.brand}. Модель: ${this.model}`);
  }
}

const car1 = new Car('BMW', 'X5');
const car2 = new Car('Mercedes', 'C200');
const car3 = new Car('Porsche', 'Cayenne');

car1.getCarInfo();
car2.getCarInfo();
car3.getCarInfo();

/**
 2. Создай класс ElectricCar, который наследует класс Car и добавь дополнительное свойство для емкости батареи.
 Переопредели метод вывода информации, чтобы включить информацию о батарее;
 */

class ElectricCar extends Car {
  constructor(brand, model, battery) {
    super(brand, model);
    this.battery = battery;
  }

  getCarInfo() {
    super.getCarInfo();
    console.log(`Емкость батареи: ${this.battery}`);
  }
}

const car4 = new ElectricCar('Tesla', 'Model X', 100000);
const car5 = new ElectricCar('Tesla', 'Model S', 150000);

car4.getCarInfo();
car5.getCarInfo();

/**
 3. Напиши пример использования полиморфизма, создав несколько классов,
 наследующих общий базовый класс, и вызывая общий метод для всех объектов.
 */

class Kitchenware {
  position() {
    console.log(`Столовый прибор лежит на столе`);
  }
}

class Fork extends Kitchenware {
  position() {
    console.log(`Вилка на столе лежит`);
  }
}

class Spoon extends Kitchenware {
  position() {
    console.log(`Ложка рядом с вилкой лежит`);
  }
}

class Plate extends Kitchenware {
  position() {
    console.log(`Тарелка на столе стоит`);
  }
}

const kitchenwareSet = [new Fork(), new Spoon(), new Plate()];

kitchenwareSet.forEach((kitchenware) => {
  kitchenware.position();
})
