# Code-Quiz

## Description

This is a basic randomized quiz skeleton.  The sample questions would need to be removed and your own questions added.  It can handle any number of questions with any number of answers.  It will automatically adjust the timer to the number of questions. 


## How to Use

In order to adjust this to your needs you would need to add your own questions in the proper format.  Each question needs to be written in the following way:

 {
    question: "YOUR QUESTION GOES HERE",
    choices: ["ANSWER OPTION", "CORRECT ANSWER", "ANSWER OPTION"],
    answer: "CORRECT ANSWER"
  }

Each question should be added to the questions.js page with a comma separating them.

You also have the option of adjusting the timer.  Currently it gives 15 seconds per question.  That can be adjusted on line 50 in the script.js file.

The score is calculated by adding the number of correct answers to the remaining time.  An incorrect answer will remove 15 seconds from the timer.  That can be edited on line 147 in the script.js file.  A correct answer will add 1 point to score.  That can be edited in line 144 in the script.js file by changing "score++" to "score+(the number you'd like)".  And the final score of time correct points and time remaining can be edited on line 69 of the script.js file, erasing the "+ secondLeft" will leave the score as only the correctly answer questions.

## The Rest

There is no style to this skeleton, but it should function similarly on any size page.  If you would like to use this, please ask.  I am amenable and can help style this as you would like.  If you are using this as a reference, no need to ask anything.  But please don't copy it.  Unless you have to.