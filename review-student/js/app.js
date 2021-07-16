let currentProblem;

document.addEventListener('DOMContentLoaded', () => {
    generateAndDisplayProblem();
});

function generateAndDisplayProblem() {
    currentProblem = {
        left: getRandomNumber(10),
        right: getRandomNumber(10)
    }

    const pContainer = document.getElementById('problem');
    const expression = `${currentProblem.left} * ${currentProblem.right}`;

    pContainer.querySelector('div.expression').innerText = expression;
    displayAnswers();
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getCorrectAnswer() {
   let correctAnswer = currentProblem.left * currentProblem.right
    return correctAnswer
}

function getWrongAnswer(){
   let wrongAnswer = `${currentProblem.left}  ${currentProblem.right}`;
    return wrongAnswer
}

let answersArray = [getCorrectAnswer,getWrongAnswer,getWrongAnswer,getWrongAnswer].sort;

function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
  }

  let oneWrongAnswer = document.getElementById('answers');
  