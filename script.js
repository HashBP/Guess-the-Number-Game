'use strict';

'use strict';

let score = 20;
let Highscore = 0;
let dataHScore = document.querySelector('.highscore');
let dataScore = document.querySelector('.score');
let a = document.querySelector('.message');
let bodyClr = document.querySelector('body');
let num = document.querySelector('.number');
const ranNum = Number(document.querySelector('.number'));
let randomNumber = Math.floor(Math.random() * 20) + 1;

const fun = () => {
  console.log(randomNumber);
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    a.textContent = 'No Guess😒....';
    bodyClr.style.backgroundColor = '#222';
  } else if (guess > randomNumber) {
    if (score > 0) {
      score--;
      dataScore.textContent = score;
      bodyClr.style.backgroundColor = '#222';
      a.textContent = 'Too High...📈';
    } else {
      dataScore.textContent = score;
      bodyClr.style.backgroundColor = 'red';
      a.textContent = '😪You Lost the game...';
      dataScore.textContent = score;
    }
  } else if (guess < randomNumber) {
    if (score > 0) {
      score--;
      dataScore.textContent = score;
      bodyClr.style.backgroundColor = '#222';
      a.textContent = 'Too Low...📉';
    } else {
      dataScore.textContent = score;
      bodyClr.style.backgroundColor = 'red';
      a.textContent = '😪You Lost the game...';
      dataScore.textContent = score;
    }
  } else if (guess == randomNumber) {
    bodyClr.style.backgroundColor = 'green';
    a.textContent = 'Hurrayy🥳🥳🥳...Correct Guess....';
    num.textContent = randomNumber;
    if (score > Highscore) {
      Highscore = score;
    }
    dataHScore.textContent = Highscore;
    ranNum.textContent = randomNumber;
  }
};
let fun2 = () => {
  bodyClr.style.backgroundColor = '#222';
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  num.textContent = '?';
  a.textContent = 'Start guessing...';
  dataScore.textContent = '20';
  document.querySelector('.guess').value = ' ';
};
console.log("With Love")
document.querySelector('.check').addEventListener('click', fun);
document.querySelector('.again').addEventListener('click', fun2);
