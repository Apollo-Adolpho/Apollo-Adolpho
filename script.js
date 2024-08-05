const mainContainer = document.querySelector(".main-container");
const containerQuestions = document.querySelector(".container-questions");
const containerAlternatives = document.querySelector(".container-alternatives");
const containerResult = document.querySelector(".container-result");
const textResult = document.querySelector(".text-result");

const questions = [
    {
        qTitle: "Após a escola, caminho à sua casa, você se depara com algo brilhanto em meio a uma árvore que recentemente caiu após uma tempestade. O que você faz?",
        alternatives: [
            "Vai averiguar",
            "Ignora e vai para casa"
        ]
    },
    {
        qTitle: "Pergunta 2",
        alternatives: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        qTitle: "Pergunta 3",
        alternatives: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        qTitle: "Pergunta 4",
        alternatives: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        qTitle: "Pergunta 5",
        alternatives: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];

let current = 0;
let currentQuestion;


function showQuestion() {
    currentQuestion = questions[current];
    containerQuestions.textContent = currentQuestion.qTitle;
    showAlternatives();
}
function showAlternatives() {
    for (const alternative of currentQuestion.alternatives) {
        const alternativesButton = document.createElement("button")
        alternativesButton.textContent = alternative
        alternativesContainer.appendChild(alternativesButton)
    }
  }
  

  showQuestion()
