/**
 1. Создай три вложенных элемента (например, `div` внутри `div` внутри `div`).
 Назначь обработчики событий для каждого из них и проследи за последовательностью вызовов
 при клике на внутренний элемент с помощью console.log();
 */

const firstDiv = document.querySelector('.first-div');
const secondDiv = document.querySelector('.second-div');
const thirdDiv = document.querySelector('.third-div');

firstDiv.addEventListener('click', () => {
  console.log('click on the first element');
});

secondDiv.addEventListener('click', () => {
  console.log('click on the second element');
});

thirdDiv.addEventListener('click', () => {
  console.log('click on the third element');
});

// при клике на вложенный элемент идет всплытие к родительскому элементу эхом по всей вложенности

/**
 2. Напиши код, который останавливает всплытие события на среднем элементе
 из предыдущего задания;
 */

secondDiv.addEventListener('click', (evt) => {
  console.log('stop Immediate Propagation');
  evt.stopImmediatePropagation()
});

// Теперь при клике на среднем элементе клик не уходит к родителю,
// если клик на внутреннем элементе, то он подымается до элемента со стопом

/**
 3. Создай форму с несколькими полями ввода и кнопкой отправки.
 Реализуй делегирование события, например, валидации каждого поля ввода при его изменении.
 Пусть это будет простое условие, например, длина строки не более 20 символов.
 */

const form = document.querySelector('.form');

form.addEventListener('input', (evt) => {
  const target = evt.target;

  if (target.tagName === 'INPUT') {
    const value = target.value;
    if (value.length > 20) {
      alert('Допускается ввод не больше 20 символов');
    }
  }
});
