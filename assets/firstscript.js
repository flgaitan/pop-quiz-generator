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
    startQuiz();   

})

options.addEventListener("click", function (){
    //when i click the on the container , I want to target the event that i aiming for (e.target.id) 
    
    //when i click this container i want the page to move on to the next index regardless if its correct or not
    questionNumber += 1;
    

    //condition for question number's length equality to end quiz
    if (questionNumber === userQuestions.length){
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


function startQuiz (){
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
}

let questionNumber = 0;
function startQuiz(){
    document.getElementById("popQuestions").style.display ="none"
    document.getElementById("options").innerHTML = userQuestions[questionNumber].question
    let optionsdiv = document.createElement("div")
    let unorderedElement = document.createElement("ul")
    for (let i=0; i<userQuestions[questionNumber].multipleChoice.length; i++){
        let listItem = document.createElement("li")
        listItem.innerHTML = userQuestions[questionNumber].multipleChoice[i]
        unorderedElement.append(listItem)
    }

    optionsdiv.append(unorderedElement)
    document.getElementById("options").append(optionsdiv)
}




// Event to compare choices with answer
//function compare(event) {
    //var element = event.target;

    //if (element.matches("li")) {
        //var createDiv = document.createElement("div");
        //createDiv.setAttribute("id", "createDiv");

        // Correct condition 
        //if (element.textContent == userQuestions[userIndex].answer) {
            //score++;
            //createDiv.textContent = "Correct! The answer is:  " + userQuestions[userIndex].answer;
            // Correct condition 
        //} else {
            // Will deduct 15 seconds off secondsLeft for wrong answers
            //secondsGiven = secondsGiven - penalty;
            //createDiv.textContent = "Wrong! The correct answer is:  " + userQuestions[userIndex].answer;
        //}

    //}
    // Question Index determines number question user is on
    //userIndex++;

    //if (userIndex >= userQuestions.length) {
        
        //createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + userQuestions.length + " Correct!";
    //} else {
        //startQuiz(userQuestions);
    //}
    //options.appendChild(createDiv);

//}












//let questionNumber = 0
//function startQuiz(){
    //document.getElementById("popQuestions").style.display ="none"
    //document.getElementById("options").innerHTML = userQuestions[questionNumber].question
    //let optionsdiv = document.createElement("div")
    //let unorderedElement = document.createElement("ul")
    //for (let i=0; i<userQuestions[questionNumber].multipleChoice.length;i++){
        //let listItem = document.createElement("li")
        //listItem.innerHTML = userQuestions[questionNumber].multipleChoice[i]
        //unorderedElement.append(listItem)
    //}

    //optionsdiv.append(unorderedElement)
    //document.getElementById("options").append(optionsdiv)
//}

