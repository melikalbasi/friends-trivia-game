// declare global consts
// startBtn const
const startBtn = "start";
// submitBtn const
const submitBtn = "submit";
$("#submitBtn").hide();
// results const
const results = [];

// const for userInput
const userInput = [];



// use jQuery to run our quiz when startBtn is clicked
// display timer to start at 120 seconds
$("#startBtn").on("click", function () {
    buildQuiz();
    $("#startBtn").hide();
    $("#submitBtn").show();
    runTimer();
});

// use jQuery to run our results when submitBtn is clicked
$("#submitBtn").on("click", function() {
    showResults();
    stop();
});



//timer variales
var timer = 20;
var intervalId;


// timer function
function runTimer() {
    $("timer").click(runTimer);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}
function decrement() {
    timer--;
    $("#timer").html("<h2>Timer: " + timer + " seconds left!</h2>");
    if (timer === 0) {
        showResults();
        stop();
    }
};
function stop() {
    clearInterval(intervalId);
    reset();
};



// use a function for buildQuiz to initialize game to display features and have it ready for reset

function buildQuiz() {



    // store the output in a const
    output = [];
    // forEach question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // store the list of answer choices
        const answers = [];

        // and for each answer...
        for (letter in currentQuestion.answers) {

            // add an html radio button
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}"
                    value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
        );


    });

    // final step is to combine output list into one string and put it on the page
    quizContainer.innerHTML = output.join("");

}



function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            // if answer is wrong or blank
            // color the answers red
            answerContainers[questionNumber].style.color = "red";
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
// display quiz on html
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
    {
        question: "Who is Regina Filange?",
        answers: {
            a: "Ross's ex wife <br>",
            b: "Joey's cousin <br>",
            c: "A made up character that Phoebe came up with <br>",
            d: "Rachel's boss <br>"
        },
        // const for correctAnswer
        correctAnswer: "c"
    },
    {
        question: "How many times has Ross been married by the end of the series?",
        answers: {
            a: "Three and counting... <br>",
            b: "Twice <br>",
            c: "He's never been married <br>",
            d: "Four times <br>"
        },
        correctAnswer: "a"
    },
    {
        question: "What was Phoebe in charge of at Rachel's surprise party?",
        answers: {
            a: "balloons and ice <br>",
            b: "making sure it was kept a secret from Rachel <br>",
            c: "buying the present <br>",
            d: "cups and ice <br>"
        },
        correctAnswer: "d"
    },
    {
        question: "Who fell in an open grave? <br>",
        answers: {
            a: "Phoebe <br>",
            b: "Joey <br>",
            c: "Chandler <br>",
            d: "Ross <br>"
        },
        correctAnswer: "d"
    },
    {
        question: "What was the name of the self help book that the girls loved? <br>",
        answers: {
            a: "Be Your Own Boss <br>",
            b: "Be Your Own Lightning Bearer <br>",
            c: "Be Your Own Chef <br>",
            d: "Be Your Own Windkeeper <br>"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the girls did Joey mistakenly see in the shower? <br>",
        answers: {
            a: "Phoebe <br>",
            b: "Monica <br>",
            c: "Rachel <br>",
            d: "None <br>"
        },
        correctAnswer: "c"
    },
    {
        question: "What did Chandler get drunk on at Joey's birthday party? <br>",
        answers: {
            a: "Vodka sodas <br>",
            b: "Jello shots <br>",
            c: "Gin and Tonics <br>",
            d: "Long Island Iced Teas <br>"
        },
        correctAnswer: "b"
    },
    {
        question: "What was Monica's apartment number? <br>",
        answers: {
            a: "20 <br>",
            b: "15 <br>",
            c: "6 <br>",
            d: "4 <br>"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of Joey's stuffed penguin? <br>",
        answers: {
            a: "Alisha May <br>",
            b: "Hugsy <br>",
            c: "Snowflake <br>",
            d: "Penny <br>"
        },
        correctAnswer: "b"
    },
    {
        question: "What book did Joey keep in the freezer? ",
        answers: {
            a: "It ",
            b: "Pet Semetary ",
            c: "The Shining ",
            d: "Little Women "
        },
        correctAnswer: "c"
    }
];








