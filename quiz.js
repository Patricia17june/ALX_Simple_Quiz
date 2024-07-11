function checkAnswer() {
    const correctAnswer = "4";

    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
     
    if(selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const feedback = document.getElementById('feedback');
    
        if(userAnswer === correctAnswer){
            feedback.textContent = "correct ! well done.";
        }
        else {
            feedback.textContent = "That's incorrect. Try again.";
        }
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
