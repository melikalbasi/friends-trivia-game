$(document).ready(function() {

// declare global variables
    // startBtn variable
    var startBtn = "start";
    // quizContainer variable
    var quizContainer 
    // submitBtn variable
    var submitBtn = "submit";
    // results variable
    var results = [];
    // variable for myQuestions (make questions into objects with correctAnswer in the key)
    var myQuestions = [
        {
            question: "Who is Regina Filange?",
            answers: {
                a: "Ross's ex wife",
                b: "Joey's cousin",
                c: "A made up character that Phoebe came up with",
                d: "Rachel's boss"
            },
            // variable for correctAnswer
            correctAnswer: "c"
        },
        {
            question: "How many times has Ross been married by the end of the series?",
            answers: {
                a: "Three and counting...",
                b: "Twice",
                c: "He's never been married",
                d: "Four times"
            },
            correctAnswer: "a"
        },
        {
            question: "What was Phoebe in charge of at Rachel's surprise party?",
            answers: {
                a: "balloons and ice",
                b: "making sure it was kept a secret from Rachel",
                c: "buying the present",
                d: "cups and ice"
            },
            correctAnswer: "d"
        },
        {
            question: "Who fell in an open grave?",
            answers: {
                a: "Phoebe",
                b: "Joey",
                c: "Chandler",
                d: "Ross"
            },
            correctAnswer: "d"
        },
        {
            question: "What book did Joey keep in the freezer?",
            answers: {
                a: "It",
                b: "Pet Semetary",
                c: "The Shining",
                d: "Little Women"
            },
            correctAnswer: "c"
        }
     ]
    // variable for userInput
    var userInput = [];
    // variable for output
    var output = [];

    // use jQuery to run our quiz when startBtn is clicked
    $("#startBtn").click(buildQuiz);

    // use jQuery to run our results when submitBtn is clicked
    $("#submitBtn").click(showResults);


// use a function for buildQuiz to initialize game to display features and have it ready for reset

    // display timer to start at 120 seconds
    function buildQuiz() {
    // store the output in a variable
    output = [];
    // forEach question...

    // store the list of answer choices

    // and for each answer...

    // add an html radio button


    // add this question and its answers to the output

    // final step is to combine out output list into one string and put it on the page


    // display done button

    // display for all done!
    //display for correct answers
    //display for incorrect answers
    //display for unanswered questions
    }


// display quiz right away buildQuiz();



//declare a function to showResults
    // on submit show the results
        // add results to correct answers
        // add results to incorrect answers
        // add results to unanswered questions

    //on timeout show the results
        // add results to correct answers
        // add results to incorrect answers
        // add results to unanswered questions

//on submit show results submitBtn.addEventListener("click", showResults);


    








})




