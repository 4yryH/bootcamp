/**
 * 1. Напиши функцию, которая использует `setTimeout` для создания таймера обратного отсчета.
 * Таймер должен выводить оставшееся время каждую секунду и остановиться, когда время истечет;
 */

// В задании ничего нет про минуты, но я как всегда проявил инициативу)))
// потому что просто секунды делал в задании при создании теста,
// там у меня были только секунды и через setInterval
const timerSeconds = document.querySelector(".timer__seconds");
const timerMinutes = document.querySelector(".timer__minutes");

const startTimer = (minutes, seconds) => {

  updateTimerDisplay(minutes, seconds);

  if (minutes === 0 && seconds === 0) {
    return;
  }

  setTimeout(() => {
    seconds--;
    updateTimerDisplay(minutes, seconds);

    if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
      startTimer(minutes, seconds);
    } else if (seconds >= 0) {
      startTimer(minutes, seconds);
    }
  }, 1000);
}

// обновление таймера, если меньше 10 сек, то допишем 0, что бы не было криво
const updateTimerDisplay = (minutes, seconds) => {
  timerSeconds.textContent = seconds >= 10 ? seconds : `0${seconds}`;
  timerMinutes.textContent = minutes >= 10 ? minutes : `0${minutes}`;
}

startTimer(1, 10);


/**
 2. Напиши функцию, которая использует `setInterval` для вывода сообщения
 "Не забудь выпить воды!" каждые 30 минут;
 */

// да можно было сделать без таймера, просто интервальный вызов сообщения каждые 30 мин
const timerCircleSeconds = document.querySelector(".timer-circle__seconds");
const timerCircleMinutes = document.querySelector(".timer-circle__minutes");

const startCircleTimer = (message, minutesInterval, secondsInterval, minutes = 0, seconds = 0) => {
  minutes = minutesInterval;
  seconds = secondsInterval;
  updateTimerCircleDisplay(minutes, seconds);

  const interval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
        alert(message);
        startCircleTimer(message, minutesInterval, secondsInterval);
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    updateTimerCircleDisplay(minutes, seconds);
  }, 1000);

}

const updateTimerCircleDisplay = (minutes, seconds) => {
  timerCircleSeconds.textContent = seconds >= 10 ? seconds : `0${seconds}`;
  timerCircleMinutes.textContent = minutes >= 10 ? minutes : `0${minutes}`;
}

startCircleTimer('Не забудь выпить воды!', 30, 0);

/**
 3. Создай HTML-форму, где есть три элемента:
 - поле "Задержка"
 - поле "Текст"
 - кнопка "Начать".
 При клике на кнопку текст выводится в консоль через указанную задержку до тех пор,
 пока пользователь снова не нажмет начать. Если пользователь снова нажмет
 на кнопку - текст снова начнет выводится в консоль, нажмет еще раз - прекратит и т. д.
 */

const inputDelay = document.querySelector(".input-delay");
const inputText = document.querySelector(".input-text");
const buttonToggle = document.querySelector(".button");

let intervalInit = null;

const startDisplayMessage = () => {
  const delay = inputDelay.value * 1000;
  const message = inputText.value;

  if (!message) {
    alert('Введите текст');
    return;
  }

  if (delay <= 0) {
    alert('Введите корректную задержку, число должно быть больше 0');
    return;
  }

  buttonToggle.textContent = 'Остановить';

  intervalInit = setInterval(() => {
    console.log(message);
  }, delay);
}

buttonToggle.addEventListener('click', evt => {
  evt.preventDefault();
  if (intervalInit === null) {
    startDisplayMessage();
  } else {
    clearInterval(intervalInit);
    intervalInit = null;
    buttonToggle.textContent = 'Начать';
  }
});
