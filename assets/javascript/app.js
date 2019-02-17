$(document).ready(function() {

var myQuestions = [
    {
        question: "Who is Regina Filange?",
        answers: ["Ross's ex wife",
            "Joey's cousin",
            "A made up character that Phoebe came up with",
            "Rachel's boss"
    ],
        correctAnswer: 2
    },
    {
        question: "How many times has Ross been married by the end of the series?",
        answers: ["Three and counting...",
            "Twice",
            "He's never been married",
            "Four times"
    ],
        correctAnswer: 0
    },
    {
        question: "What was Phoebe in charge of at Rachel's surprise party?",
        answers: ["Balloons and ice",
            "Making sure it was kept a secret from Rachel",
            "Buying the present",
            "Cups and ice"
    ],
        correctAnswer: 3
    },
    {
        question: "Who fell in an open grave?",
        answers: ["Phoebe",
            "Joey",
            "Chandler",
            "Ross"
    ],
        correctAnswer: 3
    },
    {
        question: "What was the name of the self help book that the girls loved?",
        answers: ["Be Your Own Boss",
            "Be Your Own Lightning Bearer",
            "Be Your Own Windkeeper",
            "Be Your Own Chef"
    ],
        correctAnswer: 2
    },
    {
        question: "Which of the girls did Joey mistakenly see in the shower?",
        answers: ["Phoebe",
            "Monica",
            "Rachel",
            "None"
    ],
        correctAnswer: 2
    },
    {
        question: "What did Chandler get drunk on at Joey's birthday party?",
        answers: ["Vodka sodas",
            "Jello shots",
            "Gin and Tonics",
            "Long Island Iced Teas"
    ],
        correctAnswer: 1
    },
    {
        question: "What was Monica's apartment number?",
        answers: ["20",
            "15",
            "6",
            "4"
    ],
        correctAnswer: 0
    },
    {
        question: "What is the name of Joey's stuffed penguin?",
        answers: ["Alisha May",
            "Hugsy",
            "Snowflake",
            "Penny"
    ],
        correctAnswer: 1
    },
    {
        question: "What book did Joey keep in the freezer?",
        answers: ["It ",
            "Pet Semetary ",
            "The Shining ",
            "Little Women "
    ],
        correctAnswer: 2
    }
];


var counter = 0;
    var correctAnswer = myQuestions[counter].correctAnswer;
    var result = false;
    var timer;
    var intervalId;
    var wins = 0;
    var losses = 0;
    var skips = 0;
    var image;


    function showAnswer() {
        // Stop timer
        stop();
        // display result in $("#question")
        $("#question").text(result);
        // hide timer text
        $("#timer-section").hide();
        // hide questions
        $("#questionSection").hide();
     
        // increment counter
        counter++;
        // if out of questions
        if (counter >= myQuestions.length) {
            // run end game display
            setTimeout(function() {newQuestion();}, 5000);
            setTimeout(function() {gameOver();}, 5000);
            // setTimeout(gameOver(), 8000);
        } else {
            // wait 4 seconds, then call newQuestion()
            setTimeout(function() {newQuestion();}, 4000);
        }
    };

    function gameOver() {
        $("#answer-image").empty();
        $("#questionSection").show();
        $("#question").text("GAME OVER! Could you BE any more of a Friends fan?!");
        $("#answer0").text("Correct: " + wins); 
        $("#answer1").text("Incorrect: " + losses); 
        $("#answer2").text("Questions Skipped: " + skips); 
        $("#answer3").text("Refresh to Try Again");
        $("#timer-section").hide();
        $("#iframeAudio").attr("src", "assets/music/friends-closing.wav");
        $("body").css("background-image", "url(assets/images/background.jpg)");
    }

    function countdown() {
        timer--;
        $("#timer").text(timer);
        // if a button clicked
        if (result) {
            // run the progression sequence
            showAnswer();
        // else if counter reaches 0 
        } else if (timer < 1) {
            // increment skips
            skips++;
            // set result to skipped
            result = "You'll get 'em next time.";
            image = $("<img>").attr("src", "assets/images/friendsskip.gif").attr("height", "300px")
            $("#answer-image").html(image)
            // run the progression sequence
            showAnswer();
        }
    };

    function start() {
        intervalId = setInterval(countdown, 1000);
    };

    function reset() {
        timer = 10;
        $("#timer").text(timer);
    };

    function stop() {
        clearInterval(intervalId);
        reset();
    };

    function newQuestion() {
        correctAnswer = myQuestions[counter].correctAnswer;
        $("#question").text(myQuestions[counter].question);
        $("#answer0").text(myQuestions[counter].answers[0]); 
        $("#answer1").text(myQuestions[counter].answers[1]); 
        $("#answer2").text(myQuestions[counter].answers[2]); 
        $("#answer3").text(myQuestions[counter].answers[3]); 
        result = false;
        $("#timer-section").show();
        $("#answer-image").empty();
        $("#questionSection").show();
        reset();
        start();
    };

    // Answer listener and logic
    $("#questionSection").on("click", ".answer", function() {
        var answerChosen = $(this).data("value");
        console.log(answerChosen);
        console.log(correctAnswer);
        if (answerChosen === correctAnswer) {
            wins++;
            result = "Correct!";
            image = $("<img>").attr("src", "assets/images/friendsclap.gif").attr("height", "300px")
            $("#answer-image").html(image)
        } else {
            losses++;
            result = "Incorrect...the answer was '" + myQuestions[counter].answers[correctAnswer] + "'";
            image = $("<img>").attr("src", "assets/images/friendslose.gif").attr("height", "300px")
            $("#answer-image").html(image)

        };
    });


    function startTrivia() {
        $(".trivia-content").hide();
        var startButton = $("<img>").attr("src", "assets/images/start.png").attr("height", "200px")
        startButton.addClass("start-button");
        $(".questionRow").append(startButton);
    };
    
    startTrivia();
    $(".start-button").on("click", function() {
        console.log("clicked");
        $(".trivia-content").show();  
        $(".start-button").hide();
        $("iframe").attr("src", "assets/music/friends1996.wav");
        newQuestion();
    }); 
});



