console.log("It's Linked");

var correctAnswers = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var currentQUesion;

var questionsObj = [

{   ask: "What college did LeBron attend?",
    answer: "N/A",
    As: ["UW","OSU","UO","N/A"],
    inputName: "answersOne"
},

{   ask: "How many NBA champtionship games as LeBron played in?",
    answer: "9",
    As: ["4","9","5","7"],
    inputName: "answersTwo"

},

{ask: "What is LeBron's sons first name?",
 answer: "Bronny",
 As: ["Bronny","LeJames","Bron", "Jeffery"],
 inputName: "answersThree"
 },

{ask: "How many NBA championships has LeBron James won?",
answer: "3",
As: ["3","4","2", "1"],
inputName: "answersFour"
},

{ask: "How many Highschool state championships has LeBron James won?",
answer: "3",
As: ["4","0","2", "8"],
inputName: "answersFive"
},

{ask: "How many Triple Doubles has LeBron put up so far in the NBA?",
answer: "64",
As: ["33","55","81","64"],
inputName: "answersSix"
},

{ask: "Who is the best basketball player to ever play?",
answer: "LeBron James",
As: ["Brandon Roy","LeBron James","MJ", "Denis Rodmon"],
inputName: "answersSeven"
}

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
    var fieldSET = $("<fieldset>"); // field set to be created for each input
    var creatClass = $("<div class='question'>");
    var labelTag = $("<label>");

    $(".title").text("Whatchu Know About LeBron James?"); // Display title
    creatClass.text(questionsObj[i].ask);// add text from ASK section of Object to new class that is being created.
    for (let j = 0; j < questionsObj[i].As.length; j++) {
        var inputTag = $("<br>"+"<input class='radioButton' name='"+questionsObj[i].inputName+"' type='radio' value='" + questionsObj[i].As[j]+"'>");
        labelTag.append(inputTag);// add inputs within label before appending answer from obj
        labelTag.append(questionsObj[i].As[j]); // add answer to label before adding label and radio button to fieldSET
        fieldSET.append(labelTag);// add inputs/radio buttons within a fieldset element
        creatClass.append(fieldSET);// add fieldSET within the div you are creating   
    }
    $(".questions").append(creatClass);// add all created elements within my static questions div
    };
};

// End of loadQuiz function


function checkAnswers() {
    var inputChecked = $("input");

    console.log(inputChecked[0])


    // console.log($("input"));
}

$(document).ready(function() {
    // startButton();
    loadQuiz();
    checkAnswers();




});


// PseudoCode:

// The page should start with a START Button
//When the start button is pressed the trival game 
//begins, timer starts counting down from 1 minute and all questions are pulled from my obj and displayed as a centered div or paragragh 
//answer is displayed along with Q1, Q2, Q3 as unchecked radio buttons within a <fieldset>, each pulled from the same obj as the asked question
//if the radio button checked within each fieldset is equal to the answer within that obj then add 1 to corretAnswers variable else add 1 to the uncorrect variable. 
// Display these variables in the center of the screen once the timer runs out.