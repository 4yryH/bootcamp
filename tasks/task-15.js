const body = document.querySelector('body');
const form = document.querySelector('form');
const input = document.querySelector('.input');
const buttonReset = document.querySelector('.button-reset');
const buttonTheme = document.querySelector('.button-theme');

/**
 1. Назначь для кнопки обработчик события click, который будет изменять
 текст этой кнопки при нажатии;
 */

buttonReset.addEventListener('click', () => {
  buttonReset.textContent = 'Сброшено!';
});

/**
 2. Назначь для любого элемента обработчик события mouseover,
 который будет изменять размер элемента при наведении;
 */

buttonReset.addEventListener('mouseover', () => {
  buttonReset.style.width = '100px';
  buttonReset.style.height = '40px';
});

buttonReset.addEventListener('mouseout', () => {
  buttonReset.style.width = 'auto';
  buttonReset.style.height = 'auto';
});

/**
 3. Назначь для инпута обработчик события keyup,
 который будет выводить отпущенную клавишу в консоль;
 */

input.addEventListener('keyup', (evt) => {
  console.log(`Код отпущенной клавиши ${evt.keyCode}`);
  console.log(`Название отпущенной клавиши ${evt.key}`);
});

/**
 4. Создай форму и добавь обработчик события submit,
 который будет показывать сообщение об успешной отправке;
 */

form.addEventListener('submit', () => {
  alert(`Форма успешно отправлена!`)
});

/**
 5. Пусть на странице есть кнопка с надписью 'Изменить тему', которая позволяет переключать тему страницы.
 Например, по умолчанию тема светлая: задний фон - белый, текст - черный.
 Нажимаем на кнопку -> тема меняется на темную:
 цвет фона - черный, текст - белый. Еще раз нажимаем на кнопку -> тема снова светлая и т. д.
 */
// можно написать без переключения классов, сделать проверку атрибута,
// например, background-color у body и от этого менять .style элементов
buttonTheme.addEventListener('click', () => {
  body.classList.toggle('theme-dark');
})
