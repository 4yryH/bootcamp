/**
 1. Напиши рекурсивную функцию для вычисления суммы всех элементов в массиве;
 */

function sumArray(arr, index = 0) {
  if (index === arr.length) return 0; // базовый случай при индексе 0 в массиве
  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5]));

/**
 2. Реализуй функцию для нахождения максимального элемента в массиве с использованием рекурсии;
 */

function getMaxNumber(arr, index = 0) {
  if (index === arr.length - 1) return arr[index]; // базовый случай

  const subMax = getMaxNumber(arr, index + 1);
  return arr[index] > subMax ? arr[index] : subMax;
}

console.log(getMaxNumber([1, 2, 3, 10, 4, 5]));


/**
 3. Помнишь функцию глубоко копирования объектов? Там использовалась рекурсия.
 Вернись к ней и проанализируй её еще раз, чтобы усвоить информацию ещё лучше!
 Это задание на самостоятельную работу - ничего присылать не нужно!
 */

/**
 4. А вот теперь нужно реализовать функцию для вычисления чисел Фибоначчи с кэшированием через рекурсию!
 Требования те же, что и в предыдущем уроке.
 */

function createFibonacciCalculator() {
  // Создаём кеш с начальными значениями
  const cache = {
    0: 0, // поменял начальные значения, что бы высчитывалось fibonacci(0)
    1: 1,
  };

  function fib(n) {
    if (n in cache) {
      console.log(`Достаем из кеша: fib(${n}) = ${cache[n]}`);
      return cache[n];
    }

    console.log(`Вычисляем: fib(${n}) = fib(${n - 1}) + fib(${n - 2})`);
    cache[n] = fib(n - 1) + fib(n - 2); // сохраняем в кеш
    return cache[n];
  }

  return fib;
}

const fibonacci = createFibonacciCalculator();

console.log(fibonacci(50)); // 12586269025 должен посчитать
console.log(fibonacci(0)); // 0 должен вытащить из кеша, результат уже был посчитан
console.log(fibonacci(1)); // 1 должен вытащить из кеша, результат уже был посчитан
console.log(fibonacci(5)); // 5 должен вытащить из кеша, результат уже был посчитан
console.log(fibonacci(10)); // 55 должен вытащить из кеша, результат уже был посчитан
