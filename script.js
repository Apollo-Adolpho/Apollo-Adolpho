const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
      enunciado: "Após a escola, você se depara com algo brilhando em meio a uma árvore que caiu após uma tempestade. O que você faz?",
      alternativas: [
          {
              texto: "Vai averiguar.",
              afirmacao: "Você se aproxima do brilho e encontra um pequeno dispositivo coberto de símbolos. O que você faz a seguir?"
          },
          {
              texto: "Ignora e vai para casa.",
              afirmacao: "Você decide seguir para casa, mas a curiosidade te incomoda. Você decide voltar para investigar mais tarde."
          }
      ]
  },
  {
      enunciado: "Você decide averiguar o que está brilhando. Ao se aproximar, percebe que é um pequeno dispositivo de aparência futurista. O que você faz?",
      alternativas: [
          {
              texto: "Toca no dispositivo.",
              afirmacao: "Você toca no dispositivo e ele começa a emitir uma luz suave. O que você faz a seguir?"
          },
          {
              texto: "Observa o dispositivo de longe.",
              afirmacao: "Você observa o dispositivo e nota que ele começa a pulsar suavemente. O que você decide fazer agora?"
          }
      ]
  },
  {
      enunciado: "Após tocar o dispositivo ou observá-lo de longe, ele começa a projetar uma série de hologramas. O que você faz?",
      alternativas: [
          {
              texto: "Tenta interagir com os hologramas.",
              afirmacao: "Você tenta tocar os hologramas, e eles se tornam cada vez mais intensos. O que você faz a seguir?"
          },
          {
              texto: "Continua a observar os hologramas.",
              afirmacao: "Você continua observando os hologramas, que ficam mais vibrantes e complexos. O que você decide fazer agora?"
          }
      ]
  },
  {
      enunciado: "Os hologramas se tornam cada vez mais complexos e envolventes. O dispositivo parece estar se conectando com o ambiente ao redor. O que você faz?",
      alternativas: [
          {
              texto: "Se aproxima para investigar melhor.",
              afirmacao: "Você se aproxima ainda mais e sente uma energia crescente ao seu redor. O que você faz agora?"
          },
          {
              texto: "Decide se afastar um pouco para observar com mais segurança.",
              afirmacao: "Você se afasta um pouco, mas percebe que a energia ao redor está se intensificando. O que você decide fazer agora?"
          }
      ]
  },
  {
      enunciado: "A energia do dispositivo atinge seu auge e você sente uma sensação estranha envolvendo seu corpo. O que você faz?",
      alternativas: [
          {
              texto: "Tenta se afastar rapidamente.",
              afirmacao: "Você tenta se afastar, mas a energia parece puxá-lo de volta. Em um instante, você desaparece sem deixar rastros."
          },
          {
              texto: "Fica parado, tentando entender o que está acontecendo.",
              afirmacao: "Você decide ficar parado, tentando compreender a situação. A energia se intensifica e, de repente, você desaparece sem deixar rastros."
          }
      ]
  },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final das contas...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();