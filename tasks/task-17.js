// 1 задание
// В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
// используя функции или другие средства:
// const product1 = { name: 'Product 1', price: 10 };
// const product2 = { name: 'Product 2', price: 20 };
// const total1 = product1.price * 1.2;
// const total2 = product2.price * 1.2;
// console.log('Total for Product 1:', total1);
// console.log('Total for Product 2:', total2);

//Все продукты заведем в один массив
const products = [
  {name: 'Product 1', price: 10},
  {name: 'Product 2', price: 20},
];

// коэффициент, на который умножаем в total тоже выведем в переменную
const rate = 1.2;

// Заведем функцию, которая будет делать расчет
const calculatePriceTotal = (price) => {
  return price * rate;
}

// Сделаем вывод total каждого продукта, пробежим по массиву и вызовем функцию
products.forEach(product => {
  const totalPrice = calculatePriceTotal(product.price);
  console.log(`Total for ${product.name}: ${totalPrice}`);
});


// 2 задание
// Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:
// if (user.isAdmin) {
//   if (user.isActive) {
//     if (user.age > 18) {
//       console.log('Access granted');
//     }
//   }
// }

//Завел объект для теста
const someUser = {
  isAdmin: true,
  isActive: true,
  age: 19,
}

// Заведем функцию, в которую будем передавать данные user и там их сравнивать. По итогу возвращать ответ
// при не совпадении первого же условия сразу возврат из функции
const checkAccess = (user) => {
  if (!user.isAdmin) return false;
  if (!user.isActive) return false;
  if (user.age <= 18) return false;
  return true;
}

// делаем проверку через вызов функции
if (checkAccess(someUser)) {
  console.log('Access granted');
} else {
  console.log('Access denied');
}

// 3 задание
// В следующей функции выполняется слишком много операций. Разделите её на несколько более коротких функций,
// чтобы улучшить читаемость и повторное использование кода:
// function checkStock(item) {
//   return Math.random() < 0.5; // Возвращает рандомно true или false, это просто имитация функции!
// }
// function processOrder(order) {
//   // Валидация данных заказа
//   if (!order.id || !order.items || order.items.length === 0) {
//     console.log('Invalid order');
//     return;
//   }
//   // Расчет суммы
//   let total = 0;
//   for (let item of order.items) {
//     total += item.price * item.quantity;
//   }
//   // Проверка наличия на складе
//   for (let item of order.items) {
//     if (!checkStock(item)) {
//       console.log('Item out of stock:', item.name);
//       return;
//     }
//   }
//   // Выполнение заказа
//   console.log('Order processed with total:', total);
// }

// завел объект для теста
const order = {
  id: '12345',
  items: [
    {name: 'Laptop', price: 999.99, quantity: 1},
    {name: 'Mouse', price: 25.50, quantity: 2}
  ]
};

// нужна для теста проверки на складе
function checkStock() {
  return Math.random() < 0.5; // Возвращает рандомно true или false, это просто имитация функции!
}

// отдельно валидация
function validateOrder(order) {
  if (!order.id || !order.items || order.items.length === 0) {
    console.log('Invalid order');
    return false;
  }
  return true;
}

// отдельно расчет суммы
function calculateTotal() {
  let total = 0;
  // вообще можно было через reduce пройтись и аккумулировать прайс * количество
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  return total;
}

// отдельно проверка наличия на складе
function checkItemsAvailability() {
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      return false;
    }
    return true;
  }
}

//вызов итоговой функции, которая использует все выше
function processOrder(order) {
  if (!validateOrder(order)) return;

  // подсчет суммы
  const total = calculateTotal(order.items);

  //проверка наличия
  if (!checkItemsAvailability(order)) return;

  return `Order processed successfully. Total: $${total}`;
}

// Выполнение заказа
console.log(processOrder(order));
