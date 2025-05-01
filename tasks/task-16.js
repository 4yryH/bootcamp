const elements = {
  buttonStart: document.querySelector('.button--start'),
  buttonRestart: document.querySelector('.button--restart'),
  questions: document.querySelectorAll('.question'),
  correctAnswers: document.querySelectorAll('.question__answer--correct'),
  incorrectAnswers: document.querySelectorAll('.question__answer:not(.question__answer--correct)'),
  questionAnswer: document.querySelector('.question__answer'),
  result: document.querySelector('.result'),
  resultCorrect: document.querySelector('.result__correct'),
  resultPercent: document.querySelector('.result__percent'),
  resultTotalQuestions: document.querySelector('.result__question-total'),
  questionCounterTotal: document.querySelectorAll('.question__counter-total'),
  questionForm: document.querySelectorAll('.question__form'),
  questionFormAnswers: document.querySelectorAll('.question__form-answer'),
  questionFormInputs: document.querySelectorAll('.question__form-input'),
  questionFormButtons: document.querySelectorAll('.question__form-button'),
  questionCounterCurrents: document.querySelectorAll('.question__counter-current'),
  timer: document.querySelector('.timer'),
  timerSecond: document.querySelector('.timer__seconds'),
  timerWarning: document.querySelector('.timer__warning'),
  bestCorrectAnswers: document.querySelector('.result__best-correct'),
  bestPercent: document.querySelector('.result__best-percent'),
  bestQuestionTotal: document.querySelector('.result__best-question-total'),
  mainContainer: document.querySelector('.main'),
}

// состояние
const state = {
  bestResult: {
    correctAnswers: 0,
    percent: 0,
    questions: 0,
  },
  questionIndex: 0,
  counterCorrect: 0,
  leftSeconds: 30,
  timerInterval: null,
  isProcessing: false,
  timerActive: true,
  timerPaused: false,
};

// главная функция, запустит тест и по цепочке вызовет остальные функции:
// вызовет делегирование, в котором листенер на кнопки и показ вопросов, старт, рестарт
// и так далее по цепочке
const init = () => {
  //отображение номера текущего вопроса
  elements.questionCounterCurrents.forEach((question, index) => {
    question.textContent = (index + 1).toString();
  });

  // общее количество вопросов
  elements.questionCounterTotal.forEach(questions => {
    questions.textContent = elements.questions.length.toString();
  });

  // достаем сохраненный результат, если он есть
  const savedResult = localStorage.getItem('bestTestResult');
  if (savedResult) {
    state.bestResult = JSON.parse(savedResult);
  }

  //вызов делегирования
  eventDelegation();
}

//делегирование
const eventDelegation = () => {
  //Вешаем обработчик на все ответы
  elements.mainContainer.addEventListener('click', (evt) => {
    // evt.preventDefault();
    const answerButton = evt.target.closest('.question__answer');
    const formButton = evt.target.closest('.question__form-button');

    if (answerButton) {
      handleAnswerClick(answerButton);
    } else if (formButton) {
      const formIndex = Array.from(elements.mainContainer.querySelectorAll('.question__form-button')).indexOf(formButton);
      handleFormSubmit(formIndex);
    }
  });

  // обработчик для input по enter, до этого ответ принимался только кнопке
  elements.mainContainer.addEventListener('keypress', (evt) => {
    if (evt.target.classList.contains('question__form-input') && evt.key === 'Enter') {
      const inputIndex = Array.from(elements.mainContainer.querySelectorAll('.question__form-input')).indexOf(evt.target);
      handleFormSubmit(inputIndex);
    }
  });

  // кнопка старта
  elements.buttonStart.addEventListener('click', startTest);

  // кнопка перезапуска
  elements.buttonRestart.addEventListener('click', restartTest);
}

//функция обработки клика по кнопкам, которую передаем в делегирование
const handleAnswerClick = (answerButton) => {
  // блокировать обработчик пока идет переключение вопроса и по истечению таймера
  if (state.isProcessing || !state.timerActive) return;
  state.isProcessing = true;
  //остановка таймера после клика на ответ
  state.timerPaused = true;
  // проверяем класс у ответа, если правильный или неправильный, то будем дальше красить
  const isCorrect = answerButton.classList.contains('question__answer--correct');
  const bgColor = isCorrect ? '#7ee899' : '#fd6d7f';

  answerButton.style.backgroundColor = bgColor;
  //Отключаем кнопку, что бы не тыкали повторно, потом включим обратно
  answerButton.disabled = true;

  // делаем задержку, что бы успеть посмотреть правильный ли ответ
  setTimeout(() => {
    if (isCorrect) {
      state.counterCorrect++;
    }
    // переключаем вопрос
    proceedToNextQuestion();
    // красим bg обратно
    answerButton.style.backgroundColor = '';
    // включаем обратно
    answerButton.disabled = false;
    state.isProcessing = false;
  }, 1000);
}

//обработка формы на правильность ответа и покраску, аналогично как и в предыдущей обработке,
// но будет проверка текста с совпадением ответа
const handleFormSubmit = (index) => {
  const answerTransform = elements.mainContainer.querySelectorAll('.question__form-answer')[index].textContent.toLowerCase().trim();
  const inputTransform = elements.mainContainer.querySelectorAll('.question__form-input')[index].value.toLowerCase().trim();
  const isCorrect = answerTransform === inputTransform;
  const bgColor = isCorrect ? '#7ee899' : '#fd6d7f';

  const btn = elements.mainContainer.querySelectorAll('.question__form-button')[index];
  const input = elements.mainContainer.querySelectorAll('.question__form-input')[index];

  btn.style.backgroundColor = bgColor;
  input.style.backgroundColor = bgColor;
  btn.disabled = true;
  input.disabled = true;

  setTimeout(() => {
    if (isCorrect) {
      state.counterCorrect++;
    }

    proceedToNextQuestion();
    btn.style.backgroundColor = '';
    input.style.backgroundColor = '';
    input.value = '';
    btn.disabled = false;
    input.disabled = false;
  }, 1000);
}

// переключение след вопроса с рестартом таймера
const proceedToNextQuestion = () => {
  hidePreviousQuestion();
  state.questionIndex++;

  if (state.questionIndex === elements.questions.length) {
    showResult();
    state.timerPaused = true;
  } else {
    startTimer(state.leftSeconds);
    elements.questions[state.questionIndex].classList.remove('hidden');
    state.timerPaused = false;
  }
}

// Таймер
const startTimer = (seconds) => {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
  }

  state.timerActive = true;
  updateTimerDisplay(seconds);

  state.timerInterval = setInterval(() => {
    if (state.timerPaused) return;
    seconds--;
    updateTimerDisplay(seconds);

    if (seconds <= 0) {
      clearInterval(state.timerInterval);
      //вот здесь будет передано timerActive = false, что не даст отрабатывать обработчику
      state.timerActive = false;
      elements.timerWarning.classList.remove('visibility-hidden');

      setTimeout(() => {
        proceedToNextQuestion();
        elements.timerWarning.classList.add('visibility-hidden');
      }, 1000);
    }
  }, 1000);
}

// обновление таймера, если меньше 10 сек, то допишем 0, что бы не было криво
const updateTimerDisplay = (seconds) => {
  elements.timerSecond.textContent = seconds >= 10 ? seconds : `0${seconds}`;
}

//показать секцию с результатом
const showResult = () => {
  const percent = ((state.counterCorrect / elements.questions.length) * 100).toFixed(1);

  // Сохраняем лучший результат
  if (state.counterCorrect > state.bestResult.correctAnswers) {
    state.bestResult = {
      correctAnswers: state.counterCorrect,
      percent: percent,
      questions: elements.questions.length,
    };
    localStorage.setItem('bestTestResult', JSON.stringify(state.bestResult));
  }

  // Обновляем
  elements.bestCorrectAnswers.textContent = state.bestResult.correctAnswers;
  elements.bestPercent.textContent = state.bestResult.percent;
  elements.bestQuestionTotal.textContent = state.bestResult.questions;
  elements.resultCorrect.textContent = state.counterCorrect;
  elements.resultPercent.textContent = percent;
  elements.resultTotalQuestions.textContent = elements.questions.length.toString();

  elements.result.classList.remove('hidden');
  elements.timer.classList.add('hidden');
  elements.timerWarning.classList.add('hidden');
}

//старт теста в начале
const startTest = (evt) => {
  evt.preventDefault();
  elements.buttonStart.classList.add('hidden');
  elements.questions[state.questionIndex].classList.remove('hidden');
  elements.timer.classList.remove('hidden');
  elements.timerWarning.classList.remove('hidden');
  state.timerPaused = false;
  startTimer(state.leftSeconds);
}

//повторить тест
const restartTest = (evt) => {
  evt.preventDefault();
  state.questionIndex = 0;
  state.counterCorrect = 0;

  elements.result.classList.add('hidden');
  elements.buttonStart.classList.remove('hidden');

  elements.questions.forEach(question => {
    question.classList.add('hidden');
  });

  // откатить обратно bg и кнопки
  document.querySelectorAll('.question__answer').forEach(el => {
    el.style.backgroundColor = '';
    el.disabled = false;
  });

  document.querySelectorAll('.question__form-button, .question__form-input').forEach(el => {
    el.style.backgroundColor = '';
    el.disabled = false;
  });

  document.querySelectorAll('.question__form-input').forEach(el => {
    el.value = '';
  });
}

// Скрыть предыдущий вопрос
const hidePreviousQuestion = () => {
  elements.questions[state.questionIndex].classList.add('hidden');
}

//вызываем главную функцию, которая нам все и запустит
init();
