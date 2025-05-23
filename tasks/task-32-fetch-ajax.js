/**
 1. Сделай HTML-форму для создания нового поста с полями id пользователя, заголовок, текст.
 При отправке формы выполни POST запрос и отобрази ответ сервера на странице;
 */

/**
 В теме Async/Await было:
 */
//
// Вот как это можно улучшить:
//
// async function fetchUserData(url) {
// try {
// const response = await fetch(url);
// if (!response.ok) {
// throw new Error(`HTTP error! status: ${response.status}`);
// }
// const json = await response.json();
// return json;
// } catch (error) {
// console.error('Ошибка загрузки данных:', error);
// throw error; // Это позволит вызову этого метода тоже обрабатывать ошибку
// }
// }
//
// в общем и целом - все гуд, выше просто написала, как можно улучшить код и сделать его более 'стрессоустойчивым'
//
/**
 Правильно ли понял и реализовал такой вариант кода???
 */


const formPost = document.querySelector('.post-form');
const postList = document.querySelector('.post-list');

formPost.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const id = document.querySelector('#id').value;
  const title = document.querySelector('#title').value;
  const text = document.querySelector('#text').value;

  if (!id || !title || !text) {
    alert(`Все поля должны быть заполнены!`);
    return;
  }

  const postData = {
    userId: id,
    title: title,
    body: text,
  };

  try {
    // fetch возвращает промис, ждём ответ
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    // проверка статуса
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    // выводим результат, сделал просто спаны внутри одного дива, раскрасил, что бы различать
    // что бы в одну строку без стилей и вообще там сервер возвращает свой id,
    // его я тоже вывел
    const postBody = document.createElement('div');
    const id = document.createElement('span');
    const postId = document.createElement('span');
    const postTitle = document.createElement('span');
    const postText = document.createElement('span');

    id.textContent = `ID поста: ${data.id}`;
    id.style.color = 'red';

    postId.textContent = `ID пользователя: ${data.userId} `;
    postId.style.color = 'darkblue';

    postTitle.textContent = ` Заголовок: ${data.title} `;

    postText.textContent = ` Текст: ${data.body}`;
    postText.style.color = 'darkslategray';

    postBody.appendChild(id);
    postBody.appendChild(postId);
    postBody.appendChild(postTitle);
    postBody.appendChild(postText);
    postList.appendChild(postBody);

    formPost.reset();

  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
  }
});


/**
 2. Реализуй кнопку для загрузки списка постов.
 При нажатии на кнопку выполни GET запрос к API и отобрази список постов на странице;
 */

const formGet = document.querySelector('.get-form');
const buttonReset = document.querySelector('.reset-list');
const getList = document.querySelector('.get-list');

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault()
  getList.textContent = '';
});

formGet.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);

    json.forEach(post => {
      const getBody = document.createElement('div');
      getBody.classList.add('post'); // нужен для delete
      getBody.setAttribute('data-id', post.id); // нужен для delete

      const getId = document.createElement('span');
      getId.style.color = 'red';

      const getUserId = document.createElement('span');
      getUserId.style.color = 'darkblue';

      const getTitle = document.createElement('span');
      const getText = document.createElement('span');
      getText.style.color = 'darkslategray';

      getId.textContent = `ID: ${post.id} `;
      getUserId.textContent = ` User ID: ${post.userId} `;
      getTitle.textContent = ` Заголовок: ${post.title} `;
      getText.textContent = ` Текст: ${post.body}`;

      getBody.appendChild(getId);
      getBody.appendChild(getUserId);
      getBody.appendChild(getTitle);
      getBody.appendChild(getText);
      getList.appendChild(getBody);
    });
  } catch (err) {
    console.error('Ошибка загрузки данных:', err);
    throw err;
  }
});

/**
 3. Создай функцию для удаления поста по id.
 Выполни DELETE запрос к API и обнови DOM, удалив соответствующий пост;
 */

const buttonDeletePost = document.querySelector('.delete-post');
const inputDeletePost = document.querySelector('.input-delete-post');

buttonDeletePost.addEventListener('click', async (evt) => {
  evt.preventDefault();

  const idValue = inputDeletePost.value;
  if (!idValue) {
    alert('ID не указан!');
    return;
  }

  await deletePost(idValue);
});

async function deletePost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`Delete ERROR. Status: ${response.status}`);
    }

    const postElement = document.querySelector(`.post[data-id="${id}"]`);

    if (postElement) {
      postElement.remove();
    }

    console.log(`Пост с ID ${id} удалён`);
  } catch (error) {
    console.error('Ошибка при удалении поста:', error);
  }
}

/**
 4. Реализуй функциональность для обновления данных пользователя.
 Используй PUT запрос для отправки обновленных данных на сервер
 и отобрази обновленный профиль на странице.
 Объясни, в чём разница между PUT и PATCH запросами.
 */

const formUpdate = document.querySelector('.update-form');

formUpdate.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const postId = document.querySelector('#updatePostId').value;
  const userId = document.querySelector('#updateId').value;
  const title = document.querySelector('#updateTitle').value;
  const body = document.querySelector('#updateText').value;

  if (!postId) {
    alert('Укажите ID поста!');
    return;
  }

  const updatedPost = {
    userId: userId,
    title: title,
    body: body,
  };

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(updatedPost),
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();

    // Отобразим результат
    const resultDiv = document.querySelector('.updated-post');

    // не стал стилизовать
    resultDiv.innerHTML = `
      <span>ID поста: ${postId}</span>
      <span>ID пользователя: ${data.userId}</span>
      <span>Заголовок: ${data.title}</span>
      <span>Текст: ${data.body}</span>
    `;
  } catch (error) {
    console.error('Ошибка при обновлении поста:', error);
  }

  formUpdate.reset()
});

/**
 Объясни, в чём разница между PUT и PATCH запросами.
 PUT Полностью заменяет пост (перезаписывает).
 Если мы отправим объект с другими полями или часть полей,
 то объект полностью перезапишется, если были поля, которые мы не отправили,
 то их просто уже не будет в новом объекте. В чем и заключается опасность этого метода.

 PATCH обновляет конкретные указанные поля, т.е. этим запросом можно перезаписать,
 например, только поле userID отправляем на изменение,
 остальные данные останутся без изменений
 */
