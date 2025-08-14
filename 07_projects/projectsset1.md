# Projects related to DOM

## project link
<<<<<<< HEAD

=======
>>>>>>> e317aae7cf4f50d4920200e1e10d9f0084080e36
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 Solution Code
<<<<<<< HEAD

```JavaScript
=======
``` JavaScript
>>>>>>> e317aae7cf4f50d4920200e1e10d9f0084080e36
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'brown') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

<<<<<<< HEAD
## project 2 Solution Code

```JavaScript
=======

## project 2 Solution Code
``` JavaScript
>>>>>>> e317aae7cf4f50d4920200e1e10d9f0084080e36
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const statement = document.querySelector('#statement');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi} </span>`;
    if (bmi <= '18.6') {
      statement.innerHTML = '<span>You are underweight</span>';
    } else if (bmi >= '18.6' && bmi <= '24.9') {
      statement.innerHTML = '<span>Your weight is in normal range</span>';
    } else if (bmi > '24.9') {
      statement.innerHTML = '<span>You are overweight</span>';
    }
  }
});
```

<<<<<<< HEAD
## project 3 Solution Code

```JavaScript
=======

## project 3 Solution Code
``` JavaScript
>>>>>>> e317aae7cf4f50d4920200e1e10d9f0084080e36
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

<<<<<<< HEAD
## project 4 Solution Code

```JavaScript
=======

## project 4 Solution Code
``` JavaScript
>>>>>>> e317aae7cf4f50d4920200e1e10d9f0084080e36
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.querySelector('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number greater than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  LowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;

  remaining.innerHTML = `0`;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
<<<<<<< HEAD
```
=======
```
>>>>>>> e317aae7cf4f50d4920200e1e10d9f0084080e36
