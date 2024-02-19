// 'use strict';

// console.log(document.querySelector('.message').textContent); //reading the content
// document.querySelector('.message').textContent = '🎉correct number!'; //changing the content
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value); //reading the number

//developing the app

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    //if the guess is correct
    // document.querySelector('.message').textContent = 'correct number';
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber; //display the number only when guessed right

    //changing css of body bg and style.width when the guess is correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      //updating the highscore
    }
  } else if (guess !== secretNumber) {
    //when guess is wrong{
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Implement a game rest functionality, so that the player can make a new guess! Here is how:
/*
  1.Select the element with the 'again' class and attach a click event handler
  2.In the handler function, restore intitial values of the score and secretNumber varaibles
  3.Restore the initial conditions of the message, number, score and guess input field
  4. Also restore the original background color (#222) and number width (15rem
    */

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //input value is always a string

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
