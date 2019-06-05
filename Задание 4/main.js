//код взят из 2-ого задания
//при клике на каждый эелемент доски должна запускаться функция Compute()
//реализация графики - абсолютно такая же как и в 3-ем задании.
function Compute (C){
  ErectingADispenser(); //При каждом клике я вызываю функцию для повторного перекрашивания (в стандартные цвета (Ч и Б)) доски.
  //Т.к. иначе буду оставаться на виду предыдущие результаты (синий и зелёные квадратики) работы этой функции.
  document.getElementById(C).className = 'cell BLU'; //та клетка на которую мы указали, станет синего цвета

  var Answer = []; //список ответов в виде (X, Y)
  var FinalAnswer = []; //список ответов в виде (i - адрес клетки)

  //Мы получаем индекс нажатого элемента
  //и по его "адресу" вычисляем его "x" и "y" координаты
  //Нахождение X и Y из "i" элемента, знаю из "Текстовых" игр. Сам сделал пару таких.
  //Так вот... ↓
  var y = Math.floor(C / 8); //находим Y
  console.log(y); //для отслеживания работы кода, то есть для меня.

  var x = C - (8 * y); //находим X
  console.log(x); //для отслеживания работы кода, то есть для меня.

  //дальше код из 2-го задания.
  let ax = [-1, 1, 2, 2, 1, -1, -2, -2];
  let by = [2, 2, 1, -1, -2, -2, -1, 1];
  for (var i = 0; i < 8; i++) {
    if (x+ax[i] > -1 && x+ax[i] < 8 && y+by[i] > -1 && y+by[i] < 8){
      Answer.push(x+ax[i]);
      Answer.push(y+by[i]);
    }
  }

  console.log(Answer); //для отслеживания работы кода, то есть для меня.

  //теперь переводим результаты из формы (X, Y) в (i - адрес клетки).
  for (var i = 0; i < Answer.length; i += 2) {
    FinalAnswer.push(Answer[i] + (8 * Answer[(i+1)]));
  }

  console.log(Answer); //для отслеживания работы кода, то есть для меня.
  console.log(FinalAnswer); //для отслеживания работы кода, то есть для меня.

  for (var i = 0; i < FinalAnswer.length; i++) { //Ну а теперь ответы (те что в виде "(i - адрес клетки)") отображаем на доске зелёным цветом.
    document.getElementById(FinalAnswer[i]).className = 'cell GREEN';
  }
}


//Отображение шахматной доски
//Т.к. это "шахматная доска" (вспомним что такое шахматный порядок), видно что существует 2 типа последовательности
//квадратиков на доске ("А" и "Б").
// А - бело-чёрный
// Б - чёрно-белый
// получается, доску надо заполнять в последовательности исполнения алгоритмов АБ, АБ, АБ, АБ. И того 4 раза, делать одно и тоже.
//Превратим этов в функцию ErectingADispenser(). "Было лень придумывать название. Хотя по большей части, просто хотелось назвать не стандартно."
function BuildDescA (i, a) { // А - бело-чёрный
  for (i ; i < a; i += 2) {
    document.getElementById(i).className = 'cell WHITE';
    document.getElementById(i + 1).className = 'cell BLACK';
  }
}


function BuildDescB (i, a) { // Б - чёрно-белый
  for (i ; i < a; i += 2) {
    document.getElementById(i).className = 'cell BLACK';
    document.getElementById(i + 1).className = 'cell WHITE';
  }
}

//Здесь мы собираем "Шахматную доску", но незакрашенную.
//Почему в прошлый раз, я делал (в задании 3) всё вручную (в HTML), а теперь с помощью Assembler-a? (assembler - сборщик, автосборка)
//Ответ: в прошлый раз элементов было немного. В этот раз их 64. Это многовато.
var elem = document.getElementById('table');
function SentryGoUp() {
  for (var i = 0; i < 64; i++) { //Создаём доску
    elem.innerHTML += '<div class="cell" id="'+ i + '" onclick="Compute(' + i + ')"></div>';
  }
}


function ErectingADispenser() { //Разукрашиваем доску
  //Erecting a Dispenser!
  //1
  BuildDescA (0, 8);
  BuildDescB (8, 16);
  //2
  BuildDescA (16, 24);
  BuildDescB (24, 32);
  //3
  BuildDescA (32, 40);
  BuildDescB (40, 48);
  //4
  BuildDescA (48, 56);
  BuildDescB (56, 64);
}

//исполняем эти функции
SentryGoUp(); //"Создаём" доску
ErectingADispenser(); //"Разукрашиваем" доску.

//Нормально реализовать доску с цифрами и буквами не удалось.
//Хотя можно было бы сделать это, вставив на заднем плане изображение или сделать буквы и цифры как блоки (но тогда предётся полностью пределать код)
//поэтому сделал по простому...((
document.getElementById(0).textContent = "8 / A";
document.getElementById(1).textContent = "B";
document.getElementById(2).textContent = "C";
document.getElementById(3).textContent = "D";
document.getElementById(4).textContent = "E";
document.getElementById(5).textContent = "F";
document.getElementById(6).textContent = "G";
document.getElementById(7).textContent = "H";

document.getElementById(8).textContent = "7";
document.getElementById(16).textContent = "6";
document.getElementById(24).textContent = "5";
document.getElementById(32).textContent = "4";
document.getElementById(40).textContent = "3";
document.getElementById(48).textContent = "2";
document.getElementById(56).textContent = "1";
//Fin
