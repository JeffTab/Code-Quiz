console.log("hi");

// create variables to reference all DOM elements we're working with

var timeLeftID = document.querySelector("#time-left");
var startScreenID = document.querySelector("#start-screen");
var startGameBtnID = document.querySelector("#start-game-btn");
var quizContentID = document.querySelector("#quiz-content");
var postGameScreenID = document.querySelector("#post-game-screen");
var userScoreID = document.querySelector("#user-score");
var playAgainButtonID = document.querySelector("#play-again-btn");
var questionsLocationID = document.querySelector("#questions-location");
var correctIncorrectID = document.querySelector("#correct-incorrect");

// time-left

// start game button
// start-screen element
startScreenID.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    startScreenID.setAttribute("class", "hide");
    quizContentID.removeAttribute("class");
  }
  startGame();
});




playAgainButtonID.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    postGameScreenID.setAttribute("class", "hide");
    quizContentID.removeAttribute("class");
  }
  startGame();
});

var timerIntervalID = 0;
var score;
var secondsLeft = 0;
var questions;

function startGame() {
  clearInterval(secondsLeft);

  questions = [...questionsBank];

  secondsLeft = questions.length * 15;
  score = 0;
  timeLeftID.textContent = secondsLeft + " seconds left";
  timerIntervalID = setInterval(function () {
    secondsLeft--;
    timeLeftID.textContent = secondsLeft + " seconds left";
    if (secondsLeft <= 0) {
      return stopGame();
    }
  }, 1000);
  displayQuestion();

};


function stopGame() {
  clearInterval(timerIntervalID);
  quizContentID.setAttribute("class", "hide");
  postGameScreenID.removeAttribute("class");
  score = score + secondsLeft;
  if (score < 0) {
    userScoreID.textContent = "0 points";
  }
  else {
    userScoreID.textContent = score + " points";
  };
};



var currentQuestion;
var choice0;
var choice1;
var answer;
var choice0Text;
var choice1Text;
var arrayNumber;
var choiceButton;

function displayQuestion() {

  arrayNumber = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[arrayNumber];
  questionsLocationID.textContent = currentQuestion.question;

  linebreakFunction();

  for (i = 0; i < currentQuestion.choices.length; i++) {

    choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion.choices[i];
    choiceButton.setAttribute("id", "choice-button")
    questionsLocationID.append(choiceButton);
    linebreakFunction();
  };


  answer = currentQuestion.answer;

  questionsLocationID.addEventListener("click", clearCorrectIncorrect);

  questionsLocationID.addEventListener("click", checkAnswer);



};


function linebreakFunction() {
  var linebreak = document.createElement("BR");
  questionsLocationID.appendChild(linebreak);
};


function removeQuestion() {
  questions.splice(arrayNumber, 1);
  if (questions.length == 0) {
    return stopGame();

  };
};

function clearCorrectIncorrect() {
  setTimeout(correctIncorrectTimer, 400);
  function correctIncorrectTimer() {
    correctIncorrectID.textContent = "";
  };
};


function checkAnswer() {
  if (event.target.matches("#choice-button")) {
    if (choiceButton.textContent === answer) {
      correctIncorrectID.textContent = ("Correct!");
      score++;
    }
    else {
      secondsLeft = secondsLeft - 15;
      correctIncorrectID.textContent = ("Incorrect.");
    };

    removeQuestion();
    displayQuestion();
  }
};