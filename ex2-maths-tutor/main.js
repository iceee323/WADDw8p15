/** YOUR DATA STRUCTURE HERE */

/** Do not edit below this line! The following code generates and shows questions, and tracks correct answers */

let questionsAnswered = 0;
let currentQuestion;

/**
 * Updates the progress message
 */
function updateProgress() {
    document.getElementById("progress").innerHTML = "<p>You have answered " + questionsAnswered + " question(s) so far.</p>";
}

/**
 * Displays a new question
 */
function showQuestion() {
    currentQuestion = new Question();
    document.getElementById("question").innerText = currentQuestion.getText();
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("answer").value = "";
}

document.getElementById("check-answer").addEventListener("click", function () {
    const answer = document.getElementById("answer").value;
    document.getElementById("feedback").innerHTML = "<p>" + currentQuestion.getFeedbackForAnswer(answer) + "</p>";
    if (currentQuestion.checkAnswer(answer)) {
        questionsAnswered++;
        updateProgress();
    }
});

document.getElementById("new-question").addEventListener("click", showQuestion);

showQuestion();