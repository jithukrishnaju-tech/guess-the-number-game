'use strict';
// document.querySelector('.message').textContent = 'correct';
// document.querySelector('.number').textContent = 26;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 22;
//use here value instread of textcontent coz this is in input form

//event listning
let secretnumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretnumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretnumber) {
    //when the player wins.
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#60b347'; //here the background color will chages to greeen.
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too..high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loss the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loss the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Starts guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('body').style.width = '30rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
