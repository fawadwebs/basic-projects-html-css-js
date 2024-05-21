const questions = [
    {
        question: "Who is ezsnippet?",
        answers: [

            { text: "youtuber", correct: false },
            { text: "programmer", correct: false },
            { text: "memer", correct: false },
            { text: "All of Above", correct: true },

        ]
    },
    {

        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue hale", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Giraffe", correct: true },
        ]


    },
    {

        question: "Which is largest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Blue hale", correct: false },
            { text: "	Mt. Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
        ]


    },
    {

        question: "Which is Scripting Language?",
        answers: [
            { text: "Java", correct: false },
            { text: "Phyton", correct: false },
            { text: "HTML", correct: false },
            { text: "Javascript", correct: true },
        ]


    },
    {

        question: "Which country is larger by area?",
        answers: [
            { text: "Russia", correct: false },
            { text: "China", correct: true },
            { text: "Pakistan", correct: false },
            { text: "America", correct: false },
        ]


    }

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;
function startQuiz() {
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionindex];

    let questionNo = currentQuestionindex + 1;

    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    })


}
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);

    }

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true"
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again"
    nextButton.style.display = "block"
}


function handleNextButton() {
    currentQuestionindex++;
    if (currentQuestionindex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }

}
nextButton.addEventListener("click", () => {
    if (currentQuestionindex < questions.length) {
        handleNextButton()
    }
    else {
        startQuiz()
    }
})

startQuiz();
