const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 2,
  },
  {
    quiz: ["class", "near", "next"],
    options: ["trace", "adjacent"],
    correct: 2,
  },
];

let score = 0;
let clicked = [];

scoreDisplay.textContent = score;

function populateQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");

    const logoDisplay = document.createElement("h1");
    logoDisplay.textContent = "  ✏️";
    questionBox.append(logoDisplay);

    question.quiz.forEach((tip) => {
      const tipText = document.createElement("p");
      tipText.textContent = tip;
      questionBox.append(tipText);
    });

    const questionButtons = document.createElement("div");
    questionButtons.classList.add("question-buttons");
    questionBox.append(questionButtons);

    question.options.forEach((option, optionIndex) => {
      const questionButton = document.createElement("button");
      questionButton.classList.add("question-button");
      questionButton.textContent = option;

      questionButton.addEventListener("click", () =>
        checkAnswer(
          questionButton,
          answerDisplay,
          option,
          optionIndex + 1,
          question.correct
        )
      );

      questionButtons.append(questionButton);
    });

    const answerDisplay = document.createElement("div");
    answerDisplay.classList.add("answer-display");
    questionBox.append(answerDisplay);

    questionDisplay.append(questionBox);
  });
}

function checkAnswer(
  questionButton,
  answerDisplay,
  option,
  optionIndex,
  correctAnswer
) {
  if (optionIndex == correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    addResult(answerDisplay, "Correct!", "correct");
  } else {
    score--;
    scoreDisplay.textContent = score;
    addResult(answerDisplay, "Wrong!", "wrong");
  }
  clicked.push(option);
  questionButton.disabled = clicked.includes(option);
}

function addResult(answerDisplay, answer, className) {
  answerDisplay.textContent = answer;
  answerDisplay.classList.remove("wrong");
  answerDisplay.classList.remove("correct");
  answerDisplay.classList.add(className);
}

populateQuestions();
