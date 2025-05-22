/**
 1. Создай форму для ввода контактной информации (имя, телефон, email).
 Сохрани данные в LocalStorage в виде объекта JSON. Затем извлеки данные из LocalStorage,
 преобразуй их обратно в объект и отобрази контактную информацию на странице;
 */

const form = document.querySelector('.form');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // соберем все данные из формы
  const formData = new FormData(evt.target);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  localStorage.setItem('data', JSON.stringify(data));

  console.log('Данные сохранены: ', data);
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('data');

  console.log('Данные загружены: ', savedData);

  if (savedData) {
    const data = JSON.parse(savedData);

    Object.keys(data).forEach((key) => {
      const input = form.elements[key];
      if (input) {
        input.value = data[key];
      }
    });
  }
});

/**
 2. Создай приложение для учета расходов.
 Сохрани каждую запись расхода (описание, сумма, дата) в LocalStorage в виде массива объектов JSON.
 Затем извлеки данные из LocalStorage и отобрази список расходов.
 Также реализуй функцию удаления записи из LocalStorage;
 */

const expenseForm = document.querySelector('.expense-form');
const expenseList = document.querySelector('.expense-list');
const storageKey = 'expense';

// Вытаскиваем значения, если есть
function getExpenses() {
  const saved = localStorage.getItem(storageKey);

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return []; // если что не так, вернем пустой массив
  }
}

// сохраняшка в localStorage
function saveExpenses(expenses) {
  localStorage.setItem(storageKey, JSON.stringify(expenses));
  // проверочка, что сейчас в localStorage
  console.log('Сохраненные данные: ', JSON.stringify(expenses));
}

// рендер списка
function renderExpenses() {
  const expenses = getExpenses();

  // чистим список, на всякий случай
  expenseList.innerHTML = '';

  // Пробежим и создадим под каждый пункт новый элемент списка li
  expenses.forEach((item, index) => {
    const li = document.createElement('li');
    // запишем в li полученные данные, там же кнопку для удаления
    li.innerHTML = `${item.date} — <strong>${item.description}</strong>: ${item.amount} ₽
      <button data-index="${index}">Удалить</button>`;
    // добавляем li в ul
    expenseList.appendChild(li);
  });
}

// обработка формы
expenseForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(expenseForm);
  const newExpense = {
    description: formData.get('description'),
    amount: formData.get('amount'),
    date: formData.get('date'),
  }

  const expenses = getExpenses();
  expenses.push(newExpense);
  saveExpenses(expenses);
  renderExpenses();
  form.reset();
});

// удаление записи
expenseList.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    const index = evt.target.dataset.index;
    const expenses = getExpenses();
    expenses.splice(index, 1);
    saveExpenses(expenses);
    renderExpenses();
  }
});

// рендер при загрузке
document.addEventListener('DOMContentLoaded', renderExpenses);

/**
 3. Создай счетчик, который отслеживает и отображает активное время пользователя на странице.
 Время должно обновляться каждую секунду и сохраняться в SessionStorage.
 */

const timerElement = document.querySelector('.timer');
const storage = 'activeTimeSeconds';

let seconds = parseInt(sessionStorage.getItem(storage)) || 0;

// формат мм:сс
function formatTime(sec) {
  const minutes = Math.floor(sec / 60).toString().padStart(2, '0');
  const seconds = (sec % 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
}

// обновление времени
function updateTimer() {
  seconds++;
  sessionStorage.setItem(storage, seconds);
  timerElement.textContent = formatTime(seconds);
}

// Исходное значение
timerElement.textContent = formatTime(seconds);

// Вызов обновлнения с интервалов в 1сек
setInterval(updateTimer, 1000);
