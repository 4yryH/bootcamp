const buttonStart = document.querySelector('.button--start');
const buttonRestart = document.querySelector('.button--repeat');
const questions = document.querySelectorAll('.question');
const correctAnswers = document.querySelectorAll('.question__answer--correct');
const incorrectAnswers = document.querySelectorAll('.question__answer:not(.question__answer--correct)');
const result = document.querySelector('.result');
const resultCorrect = document.querySelector('.result__correct');
const resultPercent = document.querySelector('.result__percent');
const resultTotalQuestions = document.querySelector('.result__question-total');
const questionCounterTotal = document.querySelectorAll('.question__counter-total');
const questionForm = document.querySelectorAll('.question__form');
const questionFormAnswers = document.querySelectorAll('.question__form-answer');
const questionFormInputs = document.querySelectorAll('.question__form-input');
const questionFormButtons = document.querySelectorAll('.question__form-button');
const questionCounterCurrents = document.querySelectorAll('.question__counter-current');
const timer = document.querySelector('.timer');
const timerSecond = document.querySelector('.timer__seconds');
const timerWarning = document.querySelector('.timer__warning');
const bestCorrectAnswers = document.querySelector('.result__best-correct');
const bestPercent = document.querySelector('.result__best-percent');
const bestQuestionTotal = document.querySelector('.result__best-question-total');

let bestResult = { // для хранения результата
  correctAnswers: 0,
  percent: 0,
  questions: 0,
};
let questionIndex = 0; // что бы передавать вызвать след вопрос по индексу
let counterCorrect = 0; // счетчик правильных ответов
let leftSeconds = 30; // секунды для таймера

// для корректности отображения номера текущего вопроса
for (let i = 0; i < questionCounterCurrents.length; i++) {
  questionCounterCurrents[i].textContent = (i + 1).toString();
}

// достаем сохраненный результат, если он есть
document.addEventListener('DOMContentLoaded', () => {
  const savedResult = localStorage.getItem('bestTestResult');
  if (savedResult) {
    bestResult = JSON.parse(savedResult);
  }
});

for (let i = 0; i < questionCounterTotal.length; i++) {
  questionCounterTotal[i].textContent = questions.length.toString(); // прописал из скольки всего вопросов
}

const showNextQuestion = () => {
  if (questionIndex === questions.length) { // проверяем есть ли еще вопросы
    showResult(); // показать секцию с рез-том
    return; // прекращаем, иначе идет дальше и выдаст ошибку при поиске след вопроса
  } else {
    timerAnswer(leftSeconds) // вызываем таймер
  }
  questions[questionIndex].classList.remove('hidden'); //показываем след вопрос
}

const hidePreviousQuestion = () => {
  questions[questionIndex].classList.add('hidden'); // скрываем пред вопрос
}

const showResult = () => {
  // сохранение лучшего результата
  if (counterCorrect > bestResult.correctAnswers) {
    bestResult = {
      correctAnswers: counterCorrect,
      percent: ((counterCorrect / questions.length) * 100).toFixed(1),
      questions: questions.length,
    };
    localStorage.setItem('bestTestResult', JSON.stringify(bestResult));
  }
  // Выдача лучшего результата
  bestCorrectAnswers.textContent = bestResult.correctAnswers;
  bestPercent.textContent = bestResult.percent;
  bestQuestionTotal.textContent = bestResult.questions;

  result.classList.remove('hidden'); // если был последний вопрос, то показываем result
  resultCorrect.textContent = counterCorrect.toString(); // выдаем кол-во правильных ответов
  resultPercent.textContent = ((counterCorrect / questions.length) * 100).toFixed(1).toString(); // % ответов
  resultTotalQuestions.textContent = questions.length.toString(); // сколько было всего вопросов
  timer.classList.add('hidden');
  timerWarning.classList.add('hidden');
}

buttonStart.addEventListener('click', (evt) => {
  evt.preventDefault();
  buttonStart.classList.add('hidden'); //скрываем кнопку после нажатия
  questions[questionIndex].classList.toggle('hidden'); // показываем первый вопрос
  timerAnswer(leftSeconds) // вызываем таймер
  timer.classList.remove('hidden');
  timerWarning.classList.remove('hidden');
});

correctAnswers.forEach((answer) => {
  answer.addEventListener('click', function handleClick(evt) {
    evt.preventDefault();
    // отключаем подписку с ответом, иначе пока отрабатывает задержка,
    // можно тыкать по ней и проскочить след вопросы с накруткой счетчика
    answer.removeEventListener('click', handleClick)
    answer.style.backgroundColor = '#7ee899'; // красим bg в зеленый
    setTimeout(() => { // задержка, чтобы увидеть цвет bg
      counterCorrect++; // в копилку правильных ответов
      hidePreviousQuestion(); // сначала скрываем текущий вопрос по индексу
      questionIndex++; // только теперь добавляем +1 к текущему индексу
      showNextQuestion(); // после увеличения показываем вопрос по индексу
      // возвращаем обратно подписку, что бы при повторном круге работал клик
      answer.addEventListener('click', handleClick);
    }, 1500);
  });
});

incorrectAnswers.forEach((answer) => {
  answer.addEventListener('click', function handleClick(evt) {
    evt.preventDefault();

    answer.removeEventListener('click', handleClick)
    answer.style.backgroundColor = '#fd6d7f';

    setTimeout(() => { // задержка, чтобы увидеть цвет bg
      hidePreviousQuestion(); // сначала скрываем текущий вопрос по индексу
      questionIndex++; // только теперь добавляем +1 к текущему индексу
      showNextQuestion(); // после увеличения показываем вопрос по индексу
      answer.addEventListener('click', handleClick);
    }, 1500);
  });
})

questionForm.forEach((answer, index) => {
  questionFormButtons[index].addEventListener('click', function handleClick(evt) {
    evt.preventDefault();
    questionFormButtons[index].removeEventListener('click', handleClick);
    let answerTransform = questionFormAnswers[index].textContent.toLowerCase().trim();
    let inputTransform = questionFormInputs[index].value.toLowerCase().trim();

    if (answerTransform === inputTransform) {
      questionFormButtons[index].style.backgroundColor = '#7ee899'; // красим bg в зеленый
      questionFormInputs[index].style.backgroundColor = '#7ee899'; // красим bg в зеленый
      setTimeout(() => { // задержка, чтобы увидеть цвет bg
        counterCorrect++; // в копилку правильных ответов
        hidePreviousQuestion(); // сначала скрываем текущий вопрос по индексу
        questionIndex++; // только теперь добавляем +1 к текущему индексу
        showNextQuestion(); // после увеличения показываем вопрос по индексу
        questionFormButtons[index].addEventListener('click', handleClick);
      }, 1500);
    } else {
      questionFormButtons[index].style.backgroundColor = '#fd6d7f';
      questionFormInputs[index].style.backgroundColor = '#fd6d7f';
      setTimeout(() => { // задержка, чтобы увидеть цвет bg
        hidePreviousQuestion(); // сначала скрываем текущий вопрос по индексу
        questionIndex++; // только теперь добавляем +1 к текущему индексу
        showNextQuestion(); // после увеличения показываем вопрос по индексу
        questionFormButtons[index].addEventListener('click', handleClick);
      }, 1500)
    }
  })
})

buttonRestart.addEventListener('click', (evt) => {
  evt.preventDefault();
  questionIndex = 0; // обнуляем индекс для массива
  counterCorrect = 0; // обнуляем счетчик правильных ответов
  result.classList.add('hidden'); // обратно скрываем секцию результатов
  buttonStart.classList.remove('hidden'); // показываем кнопку на старте
  questions.forEach(question => {
    question.classList.add('hidden'); // возвращаем вопросам hidden, если где-то остался
  });
  correctAnswers.forEach((answer) => {
    answer.style.backgroundColor = 'transparent'; // убираем зеленый bg
  });
  incorrectAnswers.forEach((answer) => {
    answer.style.backgroundColor = 'transparent'; // убираем красный bg
  });
  questionFormButtons.forEach((button) => {
    button.style.backgroundColor = 'buttonface'; // Убираем bg
  });
  questionFormInputs.forEach((input) => {
    input.style.backgroundColor = 'transparent'; // убираем bg
  });
});


//timer
timerSecond.textContent = leftSeconds.toString();

// переменная, что бы можно было прекращать предыдущий таймер
// иначе в след вопросе будет накладываться таймер на таймер
let timerInterval = null;

const timerAnswer = (seconds) => {
  let secondsLeft = seconds;

  // проверка предыдущего таймера и его очистка
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    secondsLeft--;
    // при <10 секундах допишем 0 перед числом, что бы не так криво смотрелось
    if (secondsLeft >= 10) {
      timerSecond.textContent = secondsLeft;
    } else {
      timerSecond.textContent = `0${secondsLeft}`;
    }
    // действие при истечении времени
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timerWarning.classList.remove('visibility-hidden');
      // задержка, что бы успеть увидеть предупреждение и потом сменить вопрос
      setTimeout(() => {
        hidePreviousQuestion();
        questionIndex++;
        showNextQuestion();
        timerWarning.classList.add('visibility-hidden')
      }, 1500);
    }
  }, 1000);
}
