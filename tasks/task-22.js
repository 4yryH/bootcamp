/**
 1. Напиши функцию, которая создает и возвращает другую функцию.
 Внутренняя функция должна иметь доступ к переменной, объявленной во внешней функции,
 даже после завершения внешней функции;
 */

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


/**
 2. Реализуй пример с несколькими вложенными функциями, где каждая функция использует переменные
 из своего собственного и внешних лексических окружений;
 */

function outer() {
  const outerVar = 'Я из outer()';

  function middle() {
    const middleVar = 'Я из middle()';

    function inner() {
      const innerVar = 'Я из inner()';

      console.log(`${innerVar}, но знаю про ${middleVar} и ${outerVar}`);
    }

    console.log(`${middleVar}, знаю про ${outerVar}, но не вижу innerVar`);
    return inner;
  }

  console.log(`${outerVar}, но не вижу middleVar и innerVar`);

  return middle;
}

const middleFunc = outer();
const innerFunc = middleFunc();

innerFunc();

/**
 3*. Тебе нужно написать функцию для вычисления чисел Фибоначчи с использованием цикла и кэширования.

 Числа Фибоначчи — это последовательность, в которой каждое число является суммой двух предыдущих чисел.
 Кэширование необходимо для того, чтобы избежать повторных вычислений одних и тех же значений,
 что значительно ускорит работу функции. Кэширование реализуем с помощью только что изученных замыканий :)

 Функция должна возвращать другую функцию, которая принимает число `n` и возвращает `n`-е число Фибоначчи.
 Внутренняя функция должна использовать кэширование для хранения уже вычисленных значений чисел Фибоначчи.

 Реализация должна быть через цикл, НЕ через рекурсию!

 Пример:
 const fibonacci = createFibonacciCalculator();
 console.log(fibonacci(0)); // 0
 console.log(fibonacci(1)); // 1
 console.log(fibonacci(5)); // 5
 console.log(fibonacci(10)); // 55
 console.log(fibonacci(50)); // 12586269025 (очень быстро за счет кэширования)
 */


function createFibonacciCalculator() {
  // Создаём кеш с начальными значениями
  const cache = {
    0: 0, // поменял начальные значения, что бы высчитывалось fibonacci(0)
    1: 1,
  };

  return function(n) {
    // Если значение уже посчитано, то сразу возвращаем его
    if (n in cache) { // немного поменял условие на проверку числа в кеше
      console.log(`Достаем из кеша: fib(${n}) = ${cache[n]}`);
      return cache[n];
    }

    // Найдём последнее число, которое уже есть в кеше
    let lastComputed = Math.max(...Object.keys(cache).map(Number));
    let fib1 = cache[lastComputed - 1]; // убрал или || 1 он тут не нужен, мы уже заполнили кеш заранее
    let fib2 = cache[lastComputed];

    // Вычисляем с помощью цикла от lastComputed + 1 до n
    for (let i = lastComputed + 1; i <= n; i++) {
      let sum = fib1 + fib2;
      cache[i] = sum; // сохраняем в кеш
      fib1 = fib2;
      fib2 = sum;
      console.log(`Вычисляем: fib(${i}) = ${sum}`);
    }

    return cache[n];
  };
}

const fibonacci = createFibonacciCalculator();

console.log(fibonacci(50)); // 12586269025 должен посчитать
console.log(fibonacci(0)); // 0 должен вытащить из кеша, результат уже был посчитан
console.log(fibonacci(1)); // 1 должен вытащить из кеша, результат уже был посчитан
console.log(fibonacci(5)); // 5 должен вытащить из кеша, результат уже был посчитан
console.log(fibonacci(10)); // 55 должен вытащить из кеша, результат уже был посчитан
