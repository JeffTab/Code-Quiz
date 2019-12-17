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
var score = 0;
var secondsLeft = 0;
var status = "notplaying";


function startGame() {


  secondsLeft = 60;
  timeLeftID.textContent = secondsLeft + " seconds left";
  timerIntervalID = setInterval(function () {
    secondsLeft--;
    timeLeftID.textContent = secondsLeft + " seconds left";
    if (secondsLeft <= 0) {
      stopGame();
      return;
    }
  }, 1000);
  displayQuestion();

};


function stopGame() {
  clearInterval(timerIntervalID);
  quizContentID.setAttribute("class", "hide");
  postGameScreenID.removeAttribute("class");
};



var currentQuestion;
var choice0;
var choice1;
var answer;
var choice0Text;
var choice1Text;
var arrayNumber;

function displayQuestion() {

  arrayNumber = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[arrayNumber];
  questionsLocationID.textContent = currentQuestion.question;

  linebreakFunction();

  choice0 = document.createElement("BUTTON");
  choice0.textContent = currentQuestion.choices[0];
  questionsLocationID.append(choice0);
  choice0Text = currentQuestion.choices[0];

  linebreakFunction();

  choice1 = document.createElement("BUTTON");
  choice1.textContent = currentQuestion.choices[1];
  questionsLocationID.append(choice1);
  choice1Text = currentQuestion.choices[1];

  answer = currentQuestion.answer;

  choice0.addEventListener("click", clearCorrectIncorrect);
  choice1.addEventListener("click", clearCorrectIncorrect);

  choice0.addEventListener("click", checkAnswer0);
  choice1.addEventListener("click", checkAnswer1);

};

// if (!questions[questionIndex]) {
//   // stop game, we've hit last question
//   return stopGame();
// }
// };



function linebreakFunction() {
  var linebreak = document.createElement("BR");
  questionsLocationID.appendChild(linebreak);
};


function removeQuestion() {
  questions.splice(arrayNumber, 1);
  if (questions.length == 0) {
    stopGame();
    return;
  };
};

function clearCorrectIncorrect() {
  setTimeout(correctIncorrectTimer, 1000);
  function correctIncorrectTimer() {
    correctIncorrectID.textContent = "";
  };
};


function checkAnswer0() {

  if (choice0Text === answer) {
    correctIncorrectID.textContent = ("Correct!");
  }
  else {
    secondsLeft = secondsLeft - 15;
    correctIncorrectID.textContent = ("Incorrect.");
  };
  removeQuestion();
  displayQuestion();
}


function checkAnswer1() {

  if (choice1Text === answer) {
    correctIncorrectID.textContent = ("Correct!");
  }
  else {
    secondsLeft = secondsLeft - 15;
    correctIncorrectID.textContent = ("Incorrect.");
  };
  removeQuestion();
  displayQuestion();
}



// quiz-content

// post-game-screen
// user-score
// play-again-btn


// create variables for game logic
// timerIntervalId
// score
// secondsLeft


// create function to start game
// set secondsLeft variable starting time (300 seconds = 5 minutes)
// write secondsLeft to the page

// reset score to 0
// write score to the page (optional)

// hide start-screen element && post-game-screen
// show quiz-content element

// display first question
// displayQuestion(0);

// set timerIntervalId to setInterval function that decrements secondsLeft every second




// create function to display a question and possible choices
// function displayQuestion(questionIndex) {
//   // check if questionIndex in questions array doesn't exist


//   // get questions[questionIndex]
//   // print question to the page
//   // use data attribute to know which index the question is
//   // loop through choices and print out choices to the page (make them buttons)

// }

// create function to handle users answering
// use event delegation to make sure button was clicked
// read data attribute of what question we answered (index)
// check to see if choice picked is same as questions correct answer
// if yes, increase score++
// if no, subtract time from secondsLeft

// get index of next question (this question's index + 1)
// run displayQuestion(nextQuestionIndex)



// create a function to stop the game (either by answering all the questions or time has run out)
// clearInterval() to stop the timer
// hide quiz-content element
// show post-game-screen
// print out user score



// add event listeners

// play again button (for starting the game)

