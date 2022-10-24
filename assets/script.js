//declared variables
//var highScore = document.getElementById("highScore");
//var clear = document.getElementById("clear");

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
},

];

//declare more variables 
 //var score = 0;
var userIndex = 0;
var questionNumber = 0; 
var wrapAr = document.getElementById("wrap-around");
var timeCount = document.getElementById("timerCount")
var timerbtn = document.getElementById("selfStart");
var options = document.getElementById("options");

// Seconds- if 15 seconds per question:
var secondsGiven = 60;
// Holds interval time
var idleInterval = 0;
// Holds penalty time
var penalty = 15;
// Creates new element
var ulCreate = document.createElement("ul");

timerbtn.addEventListener("click", function(){
    startTimerBtn();
    startQuiz(questionNumber);   

})

options.addEventListener("click", function (e){
    //when i click the on the container , I want to target the event that i aiming for (e.target.id) 
    if (e.target.id === "answer"){
        console.log("YES")
    } else {
        console.log("NO")
    }
    
    //when i click this container i want the page to move on to the next index regardless if its correct or not
    questionNumber += 1;
    
    //as long as the question number is less than the length of the array, call function 
    if (questionNumber < userQuestions.length){
        startQuiz(questionNumber)
        console.log(questionNumber);
    } else {
        document.getElementById("scorekeeper").style.display ="block"
        document.getElementById("popQuestions").style.display ="none"
        //stop timer
        //next step - show scores
        console.log("end of line")
    }

})


function startTimerBtn(){
    idleInterval = setInterval(function(){
        secondsGiven--;
        timeCount.textContent= "Time left : " + secondsGiven;

        if (secondsGiven <=0){
            clearInterval(idleInterval);
            //allDone();
            timeCount.textContent= "time is up";
            } 
         }, 1000);
}


/*function startQuiz (){
    // Clears existing data 
    options.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    
    for (var i = 0; i <userQuestions; i++){
        // Appends question title only
        var givenQuestions = userQuestions[userIndex].question;
        var givenChoices = userQuestions[userIndex].multipleChoice;
        options.textContent = givenQuestions;
    }
     //New for each for question choices
        givenChoices.forEach(function (newItemChoice) {
        var listItem = document.createElement("li");
        listItem.textContent = newItemChoice;
        options.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click",(compare));
    })
}*/


function startQuiz(index){
    var string = ""
    document.getElementById("popQuestions").style.display ="none"
    //console.log(userQuestions[index])
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














