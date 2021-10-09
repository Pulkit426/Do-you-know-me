var reader= require('readline-sync');
const chalk=require('chalk');
var score=0;

var questions= [
  {
    question: "What is Pulkit's full name: ",
    answer: "Pulkit Agrawal"
  },
  {
    question: "What is Pulkit's age: ",
    answer:"21"
  },
  {
    question: "Where does Pulkit live: ",
    answer: "Faridabad"
  }
]


function game(ques,ans)
{
  var answer= reader.question(chalk.red(ques));

  if(ans===answer)
  {
    console.log("You are right");
    score++;
    console.log(chalk.magenta("Current score -- "+score));
  }
  else
  {
    console.log("You are wrong");
    console.log(chalk.magenta("Current score -- "+score));
  }

}

console.log(chalk.green("Welcome to the game "));
console.log(chalk.bold.bgBlueBright("DO YOU KNOW PULKIT"));
var name = reader.question(("Enter your name - "));

for(i=0;i<3;i++)
{
  game(questions[i].question,questions[i].answer);
}
console.log(chalk.bgRed.bold("GAME OVER"))
console.log(chalk.bold.green("Final Score"))
console.log(chalk.italic.magentaBright
(name+" "+score));