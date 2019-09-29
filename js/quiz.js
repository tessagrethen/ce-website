function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.setQuestionIndex = function(index) {
    this.questionIndex = index;
}

Quiz.prototype.nextQuestion = function() {
    this.questionIndex++;
}