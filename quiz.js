const quizData = [
    { 
        question: "Which keyword is used to declare a constant variable in JavaScript?", 
        options: ["let", "var", "const", "static"], 
        answer: "const" 
    },
    { 
        question: "What does 'typeof null' return in JavaScript?", 
        options: ["null", "undefined", "object", "number"], 
        answer: "object" 
    },
    { 
        question: "Which method is used to remove the last element from an array?", 
        options: [".shift()", ".pop()", ".splice()", ".slice()"], 
        answer: ".pop()" 
    },
    { 
        question: "What will 'console.log(2 + '2' - 1)' output?", 
        options: ["21", "3", "NaN", "22"], 
        answer: "21" 
    },
    { 
        question: "Which JavaScript function is used to parse a string into a number?", 
        options: ["parseInt()", "stringToNumber()", "toInt()", "parseFloat()"], 
        answer: "parseInt()" 
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("time");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");

function startTimer() {
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timerInterval);
    if (currentQuestionIndex >= quizData.length) {
        showResult();
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => selectAnswer(option));
        optionsEl.appendChild(li);
    });

    startTimer();
}

function selectAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    clearInterval(timerInterval);
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
}

function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    loadQuestion();
}

// Load first question
loadQuestion();

// Event Listeners
nextBtn.addEventListener("click", nextQuestion);
retryBtn.addEventListener("click", retryQuiz);
