//declared variables
var highScore = document.querySelector ("highScore");
var clear = document.querySelector ("clear");
var goBack = document.querySelector ("goBack");

//will need event listener to clear scores in a function type


//array of options for questions- creating objects so that each questions formulated can have its own Q&A within each array
//that runs instead of separate arrays for each one thing .
var userQuestions = [
{
    question: "What is the capital of the United States of America?",
    multipleChoice: ["Texas", "New York", "Washington D.C", "California"],
    answer: "Washington D.C",
 },
{
    question: "This is not a primary color",
    multipleChoice: ["Red", "Black", "Blue", "Yellow"],
    answer: "Black",
 },
 {
    question: "This state is best known as the Sunshine State",
    multipleChoice: ["California", "Georgia", "Arizona", "Florida"],
    answer: "Florida",
},
 {
    question: "America runs on ____________",
    multipleChoice: ["Dunkin'", "Starbucks", "Burger King", "McDonalds"],
    answer: "Dunkin'",
}
]

//declare more variables 
 var score = [];
 var userIndex = 0;


var wrapAr = document.getElementById("wrap-around");
var timerCount = document.getElementById("timerCount")
var timer = document.getElementById("selfStart");
var options = document.getElementById("options");

// Seconds- if 10 seconds per question:
var secondsGiven = 60;
// Holds interval time
var idleInterval = 0;
// Holds penalty time
var penalty = 15;
// Creates new element
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function(){
    startTimer()
    startQuiz()
          
        });

function startTimer(){
    idleInterval = setInterval (function() {
        secondsGiven--;
        timerCount.textContent= "Time left : " + secondsGiven;

        if (secondsGiven <=0){
            clearInterval(idleInterval);
            //allDone();
            timerCount.textContent= "time is up";
            } 
         }, 1000);
}

let questionNumber = 0
function startQuiz(){
    document.getElementById("popQuestions").style.display ="none"
    document.getElementById("options").innerHTML = userQuestions[questionNumber].question
    let optionsdiv = document.createElement("div")
    let unorderedElement = document.createElement("ul")
    for (let i=0; i<userQuestions[questionNumber].multipleChoice.length;i++){
        let listItem = document.createElement("li")
        listItem.innerHTML = userQuestions[questionNumber].multipleChoice[i]
        unorderedElement.append(listItem)
    }

    optionsdiv.append(unorderedElement)
    document.getElementById("options").append(optionsdiv)
}

