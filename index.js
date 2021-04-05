var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score =0;

function playGame(questionList){
  var userName = readlineSync.question("What is your Name? ");
  console.log("Welcome "+chalk.blue(userName) + " to How well do you know Abhishek? ")
  for(var i=0;i<questionList.length;i++){
    var userAnswer = readlineSync.question(questionList[i].question);
    if(userAnswer.toLowerCase() === questionList[i].answer.toLowerCase()){
      score++;
    }
    console.log("your current score is "+chalk.red.bold(score));
    console.log("==============================");
  }
  console.log("Your total score is "+score);
  for(var i=0;i<highScores.length;i++){
    console.log(highScores[i].name + ":" + chalk.red.bold(highScores[i].score));
  }
  
  console.log("If you have beaten the highscore, please take a screenshot and send it to me, I'll update it.");
  
}

var highScores = [{
  name:"Kartik",
  score:"4"
},
{
  name:"Himanshu",
  score:"3" 
}];

questionOne={
  question:"Where do I live? ",
  answer:"Delhi"
};

questionTwo={
  question:"Am I older then 25? ",
  answer:"No"
}

questionThree={
  question:"Do I like cooking? ",
  answer:"Yes"
}

questionList = [questionOne,questionTwo,questionThree];

playGame(questionList);