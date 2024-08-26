const mainContainer = document.querySelector(".main-container");
const containerQuestions = document.querySelector(".container-questions");
const containerAlternatives = document.querySelector(".container-alternatives");
const containerResult = document.querySelector(".container-result");
const textResult = document.querySelector(".text-result");
const questions = [
    {
      qTitle:
        "Após a escola, caminho à sua casa, você se depara com algo brilhanto em meio a uma árvore que recentemente caiu após uma tempestade. O que você faz?",
            alternatives: [
        {
          text: "Vai averiguar.",
          
          afirmation: "afirmação",
        },
        {
          text: "Ignora e vai para casa.",
          afirmation: "afirmação",
        },
      ],
    },
    {
      qTitle:
        "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
      alternatives: [
        {
          text:
            "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
          afirmation: "afirmação",
        },
        {
          text:
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
          afirmation: "afirmação",
        },
      ],
    },
    {
      qTitle:
        "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
      alternatives: [
        {
          text:
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
          afirmation: "afirmação",
        },
        {
          text:
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
          afirmation: "afirmação",
        },
      ],
    },
    {
      qTitle:
        "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
      alternatives: [
        {
          text:
            "Criar uma imagem utilizando uma plataforma de design como o Paint.",
          afirmation: "afirmação",
        },
        {
          text: "Criar uma imagem utilizando um gerador de imagem de IA.",
          afirmation: "afirmação",
        },
      ],
    },
    {
      qTitle:
        "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
      alternatives: [
        {
          text:
            "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o text inteiro.",
          afirmation: "afirmação",
        },
        {
          text:
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
          afirmation: "afirmação",
        },
      ],
    },
  ];
  
let current = 0;
let currentQuestion;
let finalStory = "";


function showQuestion() {
    currentQuestion = questions[current];
    containerQuestions.textContent = currentQuestion.qTitle;
    showAlternatives();
}
function showAlternatives() {
    for (const alternative of currentQuestion.alternatives) {
        const buttonAlternatives = document.createElement("button")
        buttonAlternatives.textContent = alternative.text;
        buttonAlternatives.addEventListener("click",() => selectedAnswer(alternative));
        containerAlternatives.appendChild(buttonAlternatives)
    }
  }
  function selectedAnswer(selectedOption){
    const afirmation = selectedOption.afirmation;
    finalStory = afirmation;

    current++;
    showQuestion();
}


  showQuestion()
