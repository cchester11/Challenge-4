const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".text"));
const totalPoints = 100;
const totalQuestions = 5;
const scoreText = document.querySelector('#score');
const timer = document.querySelector('#countdown');
let currentQuestion = {};
let selectedAnswer = true;
let score = 0;
let timeLeft = 59;
let questionsLeft = 0;
let availableQuestions = [];
const buttonHover = document.querySelector('button')

var hoverOver = buttonHover.addEventListener('mouseover', function() {
  buttonHover.setAttribute('style', 'background-color: red;')
})

var hoverOff = buttonHover.addEventListener('mouseleave', function() {
  buttonHover.setAttribute('style', 'background-color: rgba(255, 255, 255, .75);')
})

// Question array to be pulled by functions
let questions = [
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script name='xxx.js'>",
    choice2: "<script for='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<scripts></scripts>",
    answer: 3,
  },
  {
    question: "The external JavaScript file must contain the <script> tag",
    choice1: "True",
    choice2: "False",
    answer: 2,
  },
  {
    question: "Inside which HTML element do we put the Javascript?",
    choice1: "<scripting>",
    choice2: "<script>",
    choice3: "<js>",
    choice4: "<javascript",
    answer: 2,
  },
  {
    question: "How do you write a function in Javascript",
    choice1: "function = myFunction()",
    choice2: "function myFunction()",
    choice3: "myFunction = function()",
    choice4: "None of the above",
    answer: 2,
  },
  {
    question: 'What is the difference between "==" and "==="?',
    choice1: "Both B & C",
    choice2: "Both operators are the same",
    choice3: '"==" checks only for equality in value whereas "===" is a stricter equality test',
    choice4: "None of the above",
    answer: 3,
  }
];

function startGame() {
  questionsLeft = 0;
  score = 0;
  timeLeft= 59;
  availableQuestions = questions;
  countdown();
  generateQuestion();
}

function countdown() {
var timeInterval = setInterval(function() {
  if (timeLeft > 1) {
    timer.innerHTML = "seconds remaining:" + timeLeft;
    timeLeft--;
  } else {
    timer.innerHTML = "Times up! 0:00";
    clearInterval(timeInterval);
    return window.location.assign('../results/results-page.html');
  }
}, 1000)

};

function generateQuestion() {
  if(availableQuestions.length === 0 || questionsLeft > totalQuestions ) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('../results/results-page.html')
  }

  questionsLeft++;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currenQuestion =  availableQuestions[questionIndex]
  question.innerText = currentQuestion.question
  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionIndex, 1);

  selectedAnswer = true;

};

function incrementScore() {
  score += totalPoints
  scoreText.innerText = score

};

function decrementTime() {
  timeLeft -= 10
  timer_h1.innerHTML = ':' + timeLeft;

};

startGame();