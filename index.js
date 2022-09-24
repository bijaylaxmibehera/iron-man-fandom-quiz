var chalk = require("chalk");
var readlineSync = require('readline-sync');
var score = 0;
console.log("Are you a iron man's fan? Let's play a quiz and test how much do you know Iron Man. ")

var userName = readlineSync.question("May I have your name? ");

console.log("Welcome " + chalk.blueBright(userName) + " to Iron Man's fandom quiz 🥳")

//list of question
var questionList = [
  {
    question: "1.What is Iron Man's first name? a.Tony b.John c.Peter d.Stark",
    answer: "a"
  },
  {
    question: "2.What is the name of Iron Man's company? a.Iron LTD b.Marvel Industries c.Stark Industries d.Military machines R Us",
    answer: "c"
  },
  {
    question: "3.Who plays Iron Man? a.Robert Downey Jr. b.Jeff Bridges c.Howard Stark d.Samuel L. Jackson",
    answer: "a"
  },
  {
    question: "4.Who is Howard Stark? a.Tony's son b.Tony's brother c.Tony's cousin d.Tony's father",
    answer: "d"
  },
  {
    question: "5.What is the name of Iron Man's assistant? a.Pepper b.Pip c.Piper d.Pasty",
    answer: "a"
  },
  {
    question: "6.What is the name of Tony's interactive computer assistant? a.Artificial Intelligence bot b.S.I.R.I c.Iron Man assistant d.J.A.R.V.I.S",
    answer: "d"
  },
  {
    question: "7.What does Tony use in the cave to prevent shrapnel from entering his heart? a.Hydro technology b.Wind Power c.Arc Reactor technology d.Avenger Reactor technology",
    answer: "c"
  },
  {
    question: "8.How many tons can Iron Man's suit lift when fully powered? a.70-75 tons b.over 100 c.Exactly 150 tons d.over 1000",
    answer: "b"
  },
  {
    question: "9.What was the name of the terrorist organization that kidnapped Tony Stark? a.Stane Industries b.Hammer c.Dynamo Tech d.The Ten Rings",
    answer: "d"
  },
  {
    question: "10.What does JARVIS stands for? a.Just A Really Very Ideal System b.Junk And Really Very Idiotic System c.Just A Rather Very Intelligent System d.Just A Really Very Intelligent System",
    answer: "c"
  }
];

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  console.log("You have entered : ", userAnswer);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log(chalk.yellow("You are right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("You are wrong!"));
    score = score - 1;
  }
  console.log(chalk.green("Your current score is : ", score));
  console.log("---------------");
}
//traverse the question list
for (var i = 0; i < questionList.length; i++) {
  var currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.bgYellowBright("YAY! You SCORED ", score));
