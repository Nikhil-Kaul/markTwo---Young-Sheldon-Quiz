
var chalk = require('chalk');
var readLineSync = require('readline-sync');
var Score=0;
console.log(chalk.white.bgRed.bold("Young Sheldon Quiz \n"));

//Welcoming the user
var userName = readLineSync.question("Hey! what's your name? \n");

console.log(userName+", "+"Welcome to the 'Young Sheldon Quiz' \nLets see how big of a fan you are... \n");

//User wants to continue or quit-----------------------------
var userOpt = readLineSync.question("Would you like to play the quiz? \nEnter 'Y' to start the quiz or 'N' to exit the quiz\n");


//Questions----------------------------------------
var questionArray=[
  questionOne = { question: "What fictional Texas city does the show take place in? \na) Texas \nb) India \nc) Medford \nd) Manchester \n",
  answer: "c"
  },
  questionTwo = { question: "Who plays Mary Cooper on this show? \na) Laurie Metcalf \nb) Zoe Perry \nc) Lin Shaye \nd) Allison Janney \n",
  answer: "b"
  },
  questionThree = {
    question: "What farm animal approaches Sheldon in the opening sequence? \na) Pig \nb) Cow \nc) Horse \nd) Rooster\n",
    answer: "b"
  },
  questionFour = {
    question: "What is Meemaw's first and last name?\nAnswer(Two Words): ",
    answer: "connie tucker"
  },
  questionFive = {
    question: "What year does the show take place in season 1? \na) 1988 \nb) 1989 \nc) 1990 \nd) 1991\n",
    answer: "b"
  },
  questionSix = {
    question: "Where's Meemaw's house in contrast to the Cooper house? \na) On the other side of the fence in the back yard \nb) Two blocks down \nc) Across the street\nd) On the other side of town\n",
    answer: "c"
  },
  questionSeven = {
    question: "Which Houston sports team's apparel does Georgie often wear? \na) Astros\nb) Oilers \nc) Rockets\nd) University of Houston Cougars",
    answer: "b"

  },
  questionEight = {
    question: "Was Sheldon bullied by anyone on the block in season 1? \na) Yes \nb) No\n",
    answer: "a"
  },
  questionNine = {
    question: "What is the first name of Sheldon's friend in high school?\nAnswer(One Word):",
    answer: "tam"
  },
  questionTen = {
    question: "Sheldon draws up his first contractual agreement between people in season 1. \na) True \nb) False\n",
    answer: "a"
  }
  ]


//converting entered string to uppercase---------------------
 userOptMod = userOpt.toUpperCase();

if(userOptMod==="Y"){
  
 //for loop to loop the array sequence from 0 to 9 [10 questions]
  for(var i=0; i<questionArray.length; i++){
  var userAnswer = readLineSync.question(questionArray[i].question)
  var ans = userAnswer.toLowerCase();

  if(ans===questionArray[i].answer){
    console.log("Correct! \n")
    Score++;
  }else{
    console.log("Wrong! \n")
  }
  }

console.log(userName+" your score is " +Score + " out of 10");
console.log(chalk.yellow("Highscore = 9 by Nik"));
console.log("If you have beaten the highscore, send us a screenshot of your score to nikkaul@hotmail.co.uk and we will update the high score");

}
else {
  console.log("Goodbye "+userName+"!");
}
