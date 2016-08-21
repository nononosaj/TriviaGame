
    // On click function that starts the game
$("#start").on("click", function(){

        game.start
})
    // On click function for when the user finishes the game
    $(document.on("click","#end",function(){
        game.done();
    }))

// Array created for questions / answers
var questions = [{
    question: "1. What was the title of Kanye's first album?",
    choices: ["Graduation", "College Dropout", "Too Cool 4 Preschool", "Late Registration"],
    correctChoice: "Graduation"
}, {
    question: "2. What city does Kanye consider his hometown?",
    choices: ["Chicago", "Los Angeles", "Atlanta", "Pyongang"],
    correctChoice: "Chicago"
}, {
    question: "3. How many siblings does Kanye have?",
    choices: ["One", "Three", "Seven", "None"],
    correctChoice: "None"
}, {
    question: "4. What is the name of Kanye's daughter?",
    choices: ["Kanye Jr.", "Blue Ivy", "South", "North"],
    correctChoice: "North"
}, {
    question: "5. Which company did Kanye release the Yeezy Boost shoe line with?",
    choices: ["Keds", "Crocs", "Nike", "Adidas"],
    correctChoice: "Adidas"
},{
    question: "6. What is the name of Kanye's 2016 tour?",
    choices: ["Kanye Quest with Kanye West", "Glow in the Dark Tour", "Saint Pablo Tour", "Tater Tots with Taylor Swift"],
    correctChoice: "Saint Pablo Tour"
},{
    question: "7. Which member of The Beatles is featured on the song FourFiveSeconds?",
    choices: ["Paul McCartney", "George Harrison", "Ringo Starr", "Taylor Hanson"],
    correctChoice: "Paul McCartney"
},{
    question: "8. What pop star was Kanye supposed to go on the Fame Kills tour with, before it got canceled?",
    choices: ["Madonna", "Rihanna", "Beyonce", "Lady Gaga"],
    correctChoice: "Lady Gaga"
},{
    question: "9. Which rapper is featured on the song: No More Parties In LA?",
    choices: ["J. Cole", "Kendrick Lamar", "Jay-Z", "Sisqo"],
    correctChoice: "Kendrick Lamar"
},{
    question: "10. Who out of the following does Kanye share a birthday with?",
    choices: ["Tim Tebow", "Tim Duncan", "Tim Berners-Lee", "Tim McGraw"],
    correctChoice: "Tim Berners-Lee"

}];


    // Create variables for correct, incorrect, and counter
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
        game.counter--; // Game counter decrements by one second
        $("#counter").html(game.counter);
        if(game.counter <=0){
            console.log("Time is up!")
            game.done();
        }
    },
        // Function for game start that adds questions, answers, and time remaining
    start: function(){
        
        timer = setInterval(game.countdown,1000);

        $("#subWrapper").prepend("<h2> Time Remaining: <span id="counter">120</span> Seconds</h2>");

        $("#start").remove();

        for(var i = 0; i < questions.length; i++){

        $("#subWrapper").append("<h2>" + question[i] + "</h2");

        for(var j=0; j < questions[i].answers.length; j++){
            $("#subWrapper").append("<input type='radio' name ="question-""+i+" value='"+ questions[i].answers[j]+"'>" +questions[i].answers[j] )
        }
   }

        $("#subWrapper").append("<br><button id="end">DoneM/button>")
},
        // Function to check answers
    done: function(){
    $.each($("input[name="question-1]":checked"), function():
        if($(this).val()==questions[1].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};

        $.each($("input[name="question-2]":checked"), function():
        if($(this).val()==questions[2].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};
         $.each($("input[name="question-3]":checked"), function():
        if($(this).val()==questions[3].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};

        $.each($("input[name="question-4]":checked"), function():
        if($(this).val()==questions[4].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};
        $.each($("input[name="question-5]":checked"), function():
        if($(this).val()==questions[5].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};

        $.each($("input[name="question-6]":checked"), function():
        if($(this).val()==questions[6].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};
         $.each($("input[name="question-7]":checked"), function():
        if($(this).val()==questions[7].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};

        $.each($("input[name="question-8]":checked"), function():
        if($(this).val()==questions[8].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};
         $.each($("input[name="question-9]":checked"), function():
        if($(this).val()==questions[9].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};

        $.each($("input[name="question-10]":checked"), function():
        if($(this).val()==questions[10].correctAnswer){
            game.correct++;
        } else {
            game.incorrect++;
        }
        }};

            this.result();
        },


    // Function for results to pop up after game is done / time runs out
        result: function(){
            clearInterval(timer);
            $("#subWrapper h2").remove()

            $("#subWrapper").html("<h2> What took you so long? </h2>");
            $("#subWrapper").append("<h3>Correct: "this.correct+"</h3>");
            $("#subWrapper").append("<h3>Wrong: "this.incorrect+"</h3>");
        }
}