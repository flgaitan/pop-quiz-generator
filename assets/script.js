//declare variables 
var score = 0;
var userIndex = 0;
var questionNumber = 0; 
var timeCount = document.getElementById("timerCount")
var timerbtn = document.getElementById("selfStart");
var options = document.getElementById("options");
var scorekeeper = document.getElementById ("scorekeeper");

// Seconds- if 15 seconds per question:
var secondsGiven = 60;
// Holds interval time
var idleInterval = 0;
// Holds penalty time
var penalty = 15;
// Creates new element
var ulCreate = document.createElement("ul");



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
},

];

timerbtn.addEventListener("click", function(){
    startTimerBtn();
    startQuiz(questionNumber);   


})


//Event listener to click on an answer
options.addEventListener("click", function (e){
    //when i click the on the container , I want to target the event that i aiming for (e.target.id) 
    if (e.target.id === "answer"){
        //console.log("YES")
        window.confirm("correct answer!")

    } else {
        secondsGiven = secondsGiven - penalty
        //console.log("NO minus 15")
        window.confirm ("boo! try again.")
    }
    

    //when i click this container i want the page to move on to the next index regardless if its correct or not
    questionNumber += 1;
    
    //as long as the question number is less than the length of the array, call function 
    if (questionNumber < userQuestions.length){
        startQuiz(questionNumber)
        //console.log(questionNumber);
        
    } else {
        clearInterval(idleInterval)
        document.getElementById("scorekeeper").style.display ="block"
        document.getElementById("popQuestions").style.display ="none"
       
        //stop timer


    }
// Calculates time remaining and replaces it with score, dynamically adding an element "p" to the page and attaching it to the 
//scorekeeper id tag
    if (secondsGiven >= 0) {
        var timeLeft = secondsGiven;
        var createP = document.createElement("p");
        createP.textContent = "Your final score is: " + timeLeft;


        scorekeeper.appendChild(createP);
    }
            
})

function startTimerBtn(){
    idleInterval = setInterval(function(){
        secondsGiven--;
        timeCount.textContent= "Time left : " + secondsGiven;
        
        if (secondsGiven <=0){
            clearInterval(idleInterval);
            timeCount.textContent= "time is up!";
            } 
         }, 1000);
}

function startQuiz(index){
    var string = ""
    document.getElementById("popQuestions").style.display ="none"
    //console.log(userQuestions[index])
    document.getElementById("selfStart").style.display ="none"
    document.getElementById("quizpart").innerHTML = userQuestions[index].question
    //let optionsdiv = document.createElement("div")
    //let unorderedElement = document.createElement("ul")
    
    for (let i=0; i<userQuestions[index].multipleChoice.length; i++){
        //let listItem = document.createElement("li")
        
       if (userQuestions[index].multipleChoice[i] === userQuestions[index].answer){
        string+= "<li id='answer'>" + userQuestions[index].multipleChoice[i]+ "</li>"
       } else {
        string+= "<li>" + userQuestions[index].multipleChoice[i]+ "</li>"
       }
    }

   // optionsdiv.append(unorderedElement)
    options.innerHTML = string
}
    


// Label
var createScoreLabel = document.createElement("scorelabel");
createScoreLabel.setAttribute("id", "createScoreLabel");
createScoreLabel.textContent = "Enter your initials: ";

scorekeeper.appendChild(createScoreLabel);

// input
var createUserInput = document.createElement("input");
createUserInput.setAttribute("type", "text");
createUserInput.setAttribute("id", "initials");
createUserInput.textContent = "";

scorekeeper.appendChild(createUserInput);

// submit
var createSubmitBtn = document.createElement("button");
createSubmitBtn.setAttribute("type", "submit");
createSubmitBtn.setAttribute("id", "Submit");
createSubmitBtn.textContent = "Submit";

scorekeeper.appendChild(createSubmitBtn);

// Event listener to capture initials 
createSubmitBtn.addEventListener("click", function () {
    var initials = createUserInput.value;

    if (initials === null) {
        
        //console.log("invalid entry");

    } else {
        var totalScore = {
            initials: initials,
            score: secondsGiven
        }
        console.log(totalScore);
    }
});



