var answers = []; // save all the answers
var programs = [];
function display() {
    if (quiz.questionIndex == 1 && answers[0] == "interests") {
    quiz.setQuestionIndex(3);
    }

    // show question
    var elementQ = document.getElementById("question");
    var elementA = document.getElementById("answers");
    elementQ.innerHTML = quiz.getQuestion().text;
    elementA.innerHTML = "";
    
    // show options
    var choices = quiz.getQuestion().choices;
    for (var i = 0; i < choices.length; i ++) {
        var button = document.createElement("BUTTON");
        button.id = "btn" + i;
        button.innerHTML = choices[i];
        elementA.appendChild(button);
        saveAnswer(button.id, choices[i]);
    }

    showProgress();
};

function saveAnswer(id, answer) {
    var btn = document.getElementById(id);
    btn.onclick = function() {
        answers.push(answer); // save answer
        
        // check if it's the end of quiz
        if (quiz.questionIndex == 2 || quiz.questionIndex == 5 || (quiz.questionIndex == 3 && answers[1] == "Yes")) {
            showResults();
        } else {
            quiz.nextQuestion();
            display();
        }
    }
};

function showProgress() {
    var currentQuestionNumber = answers.length + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length; 
};

function matchPrograms() {
    if (answers[0] == "interests") {
        if (answers[1] == "Yes") {
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/praxis-courses' target='_blank'>Praxis Program</a>");
        } else {
            if (answers[2] == "Tutoring and mentoring") {
                if (answers[3] == "Yes") {
                    programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/civic-engagement/aclamo-after-school-program' target='_blank'>ACLAMO After-School Program</a>");
                    programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/civic-engagement/adelante' target='_blank'>Adelante</a>");
                    programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/bryn-mawr-buddies' target='_blank'>Bryn Mawr Buddies</a>");
                } else if (answers[3] == "Maybe") {
                    programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/civic-engagement/aclamo-after-school-program' target='_blank'>ACLAMO After-School Program</a>");
                    programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/civic-engagement/adelante' target='_blank'>Adelante</a>");
                    programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/bryn-mawr-buddies' target='_blank'>Bryn Mawr Buddies</a>");
                    programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/parkway-west-sat-prep-program' target='_blank'>Parkway West SAT Prep Program</a>");
                } else {
                    programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/parkway-west-sat-prep-program'>Parkway West SAT Prep Program</a>");
                }
            } else if (answers[2] == "Harvesting and planting") {
                programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/bryn-mawr-community-garden' target='_blank'>Bryn Mawr Community Garden</a>");
                programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/saturdays-service' target='_blank'>Saturdays of Service</a>");    
            } else {
                programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/volunteer-income-tax-assistance-program' target='_blank'>Volunteer Income Tax Assistance Program (VITA)</a>");
            }
        }
    } else {
        if (answers[1] == "At least a semester") {
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/civic-engagement/aclamo-after-school-program' target='_blank'>ACLAMO After-School Program</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/bryn-mawr-buddies' target='_blank'>Bryn Mawr Buddies</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/bryn-mawr-community-garden' target='_blank'>Bryn Mawr Community Garden</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/parkway-west-sat-prep-program'>Parkway West SAT Prep Program</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/saturdays-service' target='_blank'>Saturdays of Service</a>"); 
        } else if (answers[1] == "A full academic year") {
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/civic-engagement/aclamo-after-school-program' target='_blank'>ACLAMO After-School Program</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/civic-engagement/adelante' target='_blank'>Adelante</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/bryn-mawr-buddies' target='_blank'>Bryn Mawr Buddies</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/bryn-mawr-community-garden' target='_blank'>Bryn Mawr Community Garden</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/parkway-west-sat-prep-program'>Parkway West SAT Prep Program</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/saturdays-service' target='_blank'>Saturdays of Service</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/volunteer-income-tax-assistance-program' target='_blank'>Volunteer Income Tax Assistance Program (VITA)</a>");
        } else {
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/bryn-mawr-buddies' target='_blank'>Bryn Mawr Buddies</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/bryn-mawr-community-garden' target='_blank'>Bryn Mawr Community Garden</a>");
            programs.push("<a class='prog-link' href='https://www.brynmawr.edu/lilac/experiential-learning/volunteering/saturdays-service' target='_blank'>Saturdays of Service</a>");
        }
    }
};

function showResults() {
    var resultHTML = "<h2>Results</h2>";
    matchPrograms();
    
    resultHTML += "<h3 id='result'> You are matched with " + programs.length + " program(s) below. Click on each program to learn more:</h3>";
    
    resultHTML += "<ul>";
    for (var i = 0; i < programs.length; i++) {
        resultHTML += "<li>" + programs[i] +"</li>";
    }
    resultHTML += "</ul>";
    
    var element = document.getElementById("quiz");
    var button1 = document.createElement("BUTTON");
    button1.id = "back-btn";
    button1.innerHTML = "<a href='index.html'>Back to Home page</a>";
    var button2 = document.createElement("BUTTON");
    button2.id = "retake-btn";
    button2.innerHTML = "<a href='short-quiz.html'>Retake the quiz!</a>";
    
    element.innerHTML = resultHTML;
    element.appendChild(button1);
    element.appendChild(button2);
};

// create questions
var questions = [
    new Question("I want to find a program primarily based on my...", ["interests", "time commitment"]),
    new Question("How long are you willing to commit to a program?", ["At least a semester", "A full academic year", "I just want to volunteer once in a while."]),
    new Question("How many days per week are you available to participate in the program?", ["1", "2"]),
    new Question ("Are you looking for a program that has academic credit?", ["Yes", "No"]),
    new Question("What volunteer activity are you most interested in?", ["Tutoring and mentoring", "Harvesting and planting","Preparing taxes"]),
    new Question("Do you want to volunteer in a bilingual environment?", ["Yes", "Maybe", "No"])
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
display();





