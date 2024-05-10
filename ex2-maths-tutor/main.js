/** YOUR DATA STRUCTURE HERE */

class Question {
    firstNumber;
    operator;
    secondNumber;

    constructor(firstNumber, operator, secondNumber) {
        this.randomise();
    }

    getText() {
        return "What is " + this.firstNumber + this.operator + this.secondNumber + "?";
    }

    checkAnswer(answer) {
        let userAnswerInFloat = parseFloat(answer).toFixed(2);
        return this.answer == userAnswerInFloat;
    }

    getFeedbackForAnswer(answer) {
        let positiveFeedback = ["Good1","Good2"];
        let negativefeedback = ["Wrong"];
        let feedback = "";
        if(this.checkAnswer(answer) === true){
            let index = this.randomIntFromInterval(0,positiveFeedback.length - 1);
            
            feedback = positiveFeedback[index];
        }
        else{
            let index = this.randomIntFromInterval(0, negativefeedback.length - 1);
            feedback = negativefeedback[index];
        }
        return feedback;
    }

    randomise(){
        let operators = ["+", "-", "*", "/"];
        let index = this.randomIntFromInterval(0,3);
        this.operator = operators[index];

        this.firstNumber = Math.floor(Math.random() * 10);
        this.secondNumber = Math.floor(Math.random() * 10);
        index = 3;
        this.secondNumber = 0;
        if(index === 3){
            while(this.secondNumber === 0){
                this.secondNumber = Math.floor(Math.random() * 10);
            }
        }
       
        if(index === 0){
            this.answer =  this.firstNumber +   this.secondNumber;
        }
        else if(index === 1){
            this.answer =  this.firstNumber -   this.secondNumber;
        }
        else if(index === 2){
            this.answer =  this.firstNumber *   this.secondNumber;
        }
        else{
            this.answer =  this.firstNumber /   this.secondNumber;
        }
        this.answer = this.answer.toFixed(2);
    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    }





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