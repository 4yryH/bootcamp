/**
 1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;
 */

const commentLabel = document.querySelector('#comment-label');

commentLabel.textContent = 'Пиши сюда';

/**
 2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;
 */

const button = document.querySelector('.button');

button.style.color = 'red';
button.style.backgroundColor = 'black';

/**
 3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;
 6. Создай новый элемент, добавь к нему класс и добавь его в DOM;
 7. Переключи класс у существующего элемента и проверьте его наличие в консоли.
 */

const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');
const commentList = document.querySelector('#comment-list');

commentForm.onsubmit = (evt) => {
  evt.preventDefault();

  let newComment = document.createElement('p');
  newComment.classList.add('user-comment');
  newComment.textContent = commentInput.value;
  commentInput.value = '';
  commentList.appendChild(newComment);
  button.classList.toggle('green');
}

/**
 4. Напиши функцию, которая удаляет элемент с указанным ID из документа;
 */

const removeSubtitle = (elementRemove) => {
  const element = document.getElementById(elementRemove);
  console.log(element);

  button.onclick = () => {
    element.remove();
  }
}

removeSubtitle('subtitle');


/**
 5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;
 */

const linkSearch = document.querySelector('.link-search');

linkSearch.setAttribute('href', 'https://yandex.ru');

/**
 6. Создай новый элемент, добавь к нему класс и добавь его в DOM;
 Сделал его вместе с 3 заданием выше, навешивается класс на новый элемент 'p'
 */

/**
 7. Переключи класс у существующего элемента и проверьте его наличие в консоли.
 Сделал вместе с 3 заданием, навесил тоггл на кнопку
 */

