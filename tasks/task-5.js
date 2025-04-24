/**
 1. Напиши программу, которая проверяет число и выводит сообщение,
 является ли оно положительным, отрицательным или нулем;
 */
const a = 10;
const b = 0;
const c = -10;

const checkNumber = (number) => {
  if (number < 0) {
    console.log(`Число ${number} является отрицательным!`);
  } else if (number > 0) {
    console.log(`Число ${number} является положительным!`);
  } else {
    console.log(`Число ${number} является нулём!`);
  }
};

checkNumber(a);
checkNumber(b);
checkNumber(c);

/**
 2. Напиши программу, которая запрашивает у пользователя его рост и вес, на основании этих
 данных вычисляет ИМТ, и выводит сообщение о том, в каком диапазоне находится его ИМТ;
 */
const significantDeficit = 16;
const deficit = 18.5;
const normal = 25;
const excessWeight = 30;

const getBodyMassIndex = (weight, height) => {
  const bmi = (weight / Math.pow(height, 2)).toFixed(1);
  console.log(`Ваш ИМТ ${bmi}`);
  if (bmi < significantDeficit) {
    console.log(`Вы находитесь в зоне значительного дефицита массы тела`);
  } else if (bmi < deficit && bmi >= significantDeficit) {
    console.log(`Вы находитесь в зоне дефицита массы тела`);
  } else if (bmi < normal && bmi >= deficit) {
    console.log(`Вы находитесь в зоне нормальной массы тела`);
  } else if (bmi < excessWeight && bmi >= normal) {
    console.log(`Вы находитесь в зоне лишнего веса`);
  } else if (bmi > excessWeight) {
    console.log(`Вы находитесь в зоне ожирения`);
  } else {
    console.log(`Ваш ИМТ не найден в таблице, введите значения повторно`)
  }
};

getBodyMassIndex(103, 1.76);


/**
 3. Используй оператор switch, чтобы вывести название месяца на основе введенного пользователем числа (1-12);
 */
const getMonthName = (month) => {
  let monthName;

  switch (month) {
    case 1:
      monthName = 'January';
      break;
    case 2:
      monthName = 'February';
      break;
    case 3:
      monthName = 'March';
      break;
    case 4:
      monthName = 'April';
      break;
    case 5:
      monthName = 'May';
      break;
    case 6:
      monthName = 'June';
      break;
    case 7:
      monthName = 'July';
      break;
    case 8:
      monthName = 'August';
      break;
    case 9:
      monthName = 'September';
      break;
    case 10:
      monthName = 'October';
      break;
    case 11:
      monthName = 'November';
      break;
    case 12:
      monthName = 'December';
      break;
    default:
      monthName = 'В году 12 месяцев';
  }
  console.log(monthName);
}

getMonthName(5);

/**
 4. Придумай свое условие и опиши его c помощью оператора switch/case.
 */
const getClothing = (weather) => {
  let cloth;
  switch (weather) {
    case 'Солнечно':
      cloth = 'Майку';
      break;
    case 'Ветрено':
      cloth = 'Куртку';
      break;
    case 'Дождливо':
      cloth = 'Дождевик';
      break;
    case 'Морозно':
      cloth = 'Пуховик';
      break;
    case 'Пасмурно':
      cloth = 'Плащ';
      break;
    default:
      cloth = 'Непонятно, возьми зонтик на всякий случай!';
  }
  console.log(cloth);
};

getClothing('Пасмурно');
