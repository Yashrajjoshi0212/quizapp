const questions = [
    {
        question: "Which is the largest ocean?",
        answers: ["Indian", "Pacific", "Atlantic", "Arctic"],
        correct: 1
    },
    {
        question: "Who invented the telephone?",
        answers: ["Newton", "Einstein", "Alexander Graham Bell", "Tesla"],
        correct: 2
    },
    {
        question: "Which country has the Great Wall?",
        answers: ["India", "China", "Japan", "Korea"],
        correct: 1
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerList = document.getElementById("answer-list");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");

function loadQuestion() {
    answerList.innerHTML = "";
    const currentQ = questions[currentIndex];
    questionEl.textContent = currentQ.question;

    currentQ.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.textContent = answer;
        li.addEventListener("click", () => checkAnswer(li, index));
        answerList.appendChild(li);
    });
}

function checkAnswer(element, selectedIndex) {
    const correctIndex = questions[currentIndex].correct;
    const options = answerList.querySelectorAll("li");

    options.forEach((option, index) => {
        option.style.pointerEvents = "none";
        if (index === correctIndex) {
            option.classList.add("correct");
        }
        if (index === selectedIndex && selectedIndex !== correctIndex) {
            option.classList.add("wrong");
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
        scoreEl.textContent = "Score: " + score;
    }
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Finished!";
        answerList.innerHTML = "";
        nextBtn.style.display = "none";
    }
});

loadQuestion();
