console.log("It's Linked");

var correctAnswers = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var currentQUesion;

var questionsObj = [

{   ask: "What college did LeBron attend?",
    answer: "N/A",
    Qs: ["UW","OSU","UO","N/A"],
},

{   ask: "How many NBA champtionship games as LeBron played in?",
    answer: "9",
    Qs: ["4","9","5","7"]

},

{ask: "What is LeBron's first sons name?",
 answer: "Bronny",
 Qs: ["Bronny","LeJames","Bron", "Jeffery"]
 },

// {ask: "How many NBA championships has LeBron James won?",
// answer: "3",
// Q1: "Jame",
// Q2: "Smith",
// Q3: "Himms"
// },

// {ask: "How many Highschool state championships has LeBron James won?",
// answer: "3",
// Q1: "Jame",
// Q2: "Smith",
// Q3: "Himms"
// },

// {ask: "How many Triple Doubles has LeBron put up so far in the NBA?",
// answer: "64",
// Q1: "Jame",
// Q2: "Smith",
// Q3: "Himms"
// },

// {ask: "Who is the best basketball player to ever play?",
// answer: "LeBron James",
// Q1: "Jame",
// Q2: "Smith",
// Q3: "Himms"
// }

];


// Create a function that starts the page off with a start button and on click begins timer and runs the full game.

function startButton() {
    var startDiv = $("<button class='startB'>");
    startDiv.text("START");
    $(".question1").append(startDiv);   
}
// $(".quesions").empty();// empty the start button 
// create a funcion that loads the game H1, game questions from obj and the answer/Q as radio buttons

function loadQuiz() {
    //console.log(questionsObj[0].Qs[0]);
    for (var i = 0; i < questionsObj.length; i++) {
    
    // I want this function to first add ask from my array of obj to questions1
    var fieldSET = $("<fieldset>") // field set to be created for each input
    var creatClass = $("<div class='question'>");
    var inputTag = $("<input class='radioButton' type='radio' name='first' value='LeBron'>");
    var labelTag = $("<label>");

    $(".title").text("Whatchu Know About LeBron James?"); // Display title
    creatClass.text(questionsObj[i].ask);// add text from ASK section of Object to new class that is being created.
    for (let j = 0; j < questionsObj[i].Qs.length; j++) {
        labelTag.append(inputTag);// add inputs within label before appending answer from obj
        labelTag.append(questionsObj[i].Qs[j]); // add answer to label before adding label and radio button to fieldSET
        fieldSET.append(labelTag);// add inputs/radio buttons within a fieldset element
        creatClass.append(fieldSET);// add fieldSET within the div you are creating
        
        
    }
    
    $(".questions").append(creatClass);// add all created elements within my static questions div

    
    }
    

    // i want to add radio buttons into the field set tag
    // each button will be created depending on how many names are within the questionobj[i].Qs[i]
        
    
    
    
}


$(document).ready(function() {
    // startButton();
    loadQuiz();



});


// PseudoCode:

// The page should start with a START Button
//When the start button is pressed the trival game 
//begins, timer starts counting down from 1 minute and all questions are pulled from my obj and displayed as a centered div or paragragh 
//answer is displayed along with Q1, Q2, Q3 as unchecked radio buttons within a <fieldset>, each pulled from the same obj as the asked question
//if the radio button checked within each fieldset is equal to the answer within that obj then add 1 to corretAnswers variable else add 1 to the uncorrect variable. 
// Display these variables in the center of the screen once the timer runs out.