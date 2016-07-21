


	var number = 120; // Variable for total seconds

				// Function to start game decrease a second off of 120 seconds when page loads
	function startTime(){
            counter = setInterval(decrement, 1200);
        }
        		// Taking each second away and displaying the number under seconds remaining
	function decrement(){
            number--;
            $('#timeLeft').html('<h3>' + number + ' </h3>');
            if (number === 0){
                stop();
                alert('No More Parties In L.A.!') // Alert box pops up when time is up
            	
            }
        }

   	function stop(){
            clearInterval(counter);
        }

	startTime();

 


// 			var i = 0;
// 			var length1 = allQuestions.length;
// 			var correctAnswer = 0;
// 			var wrongAnswer = 0;

// 			  questionArray() {
// 			              question[0] = "album";
// 			              question[1] = "home";
// 			              question[2] = "sibling";
// 			              question[3] = "daughter";
// 			              question[4] = "boost";
// 			              question[5] = "tour";
// 			              question[6] = "beatles";
// 			              question[7] = "fame";
// 			              question[8] = "parties";
// 			              question[9] = "birthday";
// 			          }

// 		if $('album'[value="dropout"]: checked')
// 			then
// }



// var quizEnd



 // In Class example


var panel = $('#quiz-area'); 
var countStartNumber = 30; 

// This function handles events where one button is clicked
// Start On Click
$(document).on('click', '#start', function() {
    // game.startGame();
})

// Submit On Click
$(document).on('click', '.check-guess', function(e) {
    // game.checkGuess(e)
})

// Start Over On Click
$(document).on('click', '#start-over', function() {
  //   game.loadQuestion();
});


var questionsArray = [{
    question: "What was the title of Kanye's first album?",
    choices: ["Graduation", "The College Dropout", "Too Cool 4 Preschool", "Late Registration"],
    correctChoice: "two",
    image: "assets/images/smile.jpg";
}, {
    question: "What city does Kanye consider his hometown?",
    choices: ["Chicago", "Los Angeles", "Atlanta", "Pyongyang"],
    correctChoice: "Chicago",
    image: "assets/images/smile2.jpg";
}, {
    question: "How many siblings does Kanye have? ",
    choices: ["One", "Three", "Seven", "None"],
    correctChoice: "None",
    image: "assets/images/smile3.jpg";
}]

// Array of Question Objects [0,1,2,3]

var game = {

    // Variables
    questions: questionsArray, // Import QuestionsArray into the Game Object
    questionNumber: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    unAnswered: 0,
    currentQuestionNumber: 0,

    // Functions
    countdown: function() {

        // Set Countdown time for each question

    },

    timeUp: function() {

        // What happens when the timer runs out

    },

    reset: function() {


    },

    checkGuess: function() {

        // Is this the correct answer for the Question

        // Yes

        // No

        // Is this the last Question?
        if (this.questionNumber === questionsArray.length - 1) {

            // Game Over!!

        } else {

            // Continue Game
        }


    },

    finalResults: function() {


    },

    loadQuestion: function() {

        // start timer
        timer = setInterval(game.countdown, 1000);

        // Print Question
        console.log(this.questions[questionNumber].question)

        // Print Choices as buttons (for loop needed)
        console.log(this.questions[questionNumber].choices[0])
        console.log(this.questions[questionNumber].choices[1])
        console.log(this.questions[questionNumber].choices[2])
        console.log(this.questions[questionNumber].choices[3])
        console.log(this.questions[questionNumber].correctChoice)

    },

    nextQuestion: function() {

        // start timer
        this.timer()

        // Advance Question Number
        this.questionNumber++

        // Call loadQuestion() Function

    }

}






