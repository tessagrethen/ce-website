function Quiz(questions) {
//    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

//Quiz.prototype.skipQuestions = function(n) {
//    for (var i = 0; i < n; i++) {
//        this.questionIndex++;
//    }
//}

Quiz.prototype.setQuestionIndex = function(index) {
    this.questionIndex = index;
}

//Quiz.prototype.getQuestionindex = function() {
//    return this.questionIndex;
//}

Quiz.prototype.nextQuestion = function() {
    this.questionIndex++;
}

//Quiz.prototype.guess = function(answer) {
//    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
//        this.score++;
//    }
//
//    this.questionIndex++;
//}


//Quiz.prototype.isEnded = function() {
//    return this.questionIndex === this.questions.length;
//}
