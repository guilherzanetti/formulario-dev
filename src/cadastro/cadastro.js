// frontend-frontend-frontend-frontend-frontend-frontend-frontend-frontend-frontend-frontend-frontend-
// Variáveis
const perguntas = document.querySelectorAll('.perguntas');


// Fazer com que o radio selecionado mude a cor da label
function selectLabel(label, perguntaIndex) {
  const perguntas = document.querySelectorAll('.perguntas');
  const labels = perguntas[perguntaIndex].querySelectorAll('label');

  labels.forEach((l) => {
    l.classList.remove('selectedLabel');
  });

  label.classList.add('selectedLabel');
}


// Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-



//Variáveis
const nome = document.getElementById("nome");
const btnCadastrar = document.getElementById("btnCadastrar");
const arrayNames = JSON.parse(localStorage.getItem("arrayNames")) || [];

//adicionando um listenning ao botão


btnCadastrar.addEventListener("click", (e) => {
  e.preventDefault();

  const valNames = nome.value.trim();

  valNames != ""
    ? (
      arrayNames.push(valNames),
      localStorage.setItem("arrayNames", JSON.stringify(arrayNames)),
      console.log("O Nome: " + valNames + " foi adicionado com sucesso!")
    )
    : alert("Por favor, insira um nome válido.");

});

// CADASTRO

let devImg, devDesc, devCaracter;

// Adicione esta função ao seu arquivo cadastro.js
function obterRespostasConsole() {
  const nome = document.querySelector('#nome').value;
  const respostas = {
    nome: nome,
    genero: obterRespostaPergunta('genero'),
    q1: obterRespostaPergunta('q1'),
    q2: obterRespostaPergunta('q2'),
    q3: obterRespostaPergunta('q3'),
    q4: obterRespostaPergunta('q4'),
    q5: obterRespostaPergunta('q5'),
    // Adicione mais perguntas conforme necessário
  };

  const q1resposta = respostas.q1
  const q2resposta = respostas.q2
  const q3resposta = respostas.q3
  const q4resposta = respostas.q4
  const q5resposta = respostas.q5

  let resposta1 = 0;
  let resposta2 = 0;
  let resposta3 = 0;

  // Verificação da quantidade da mesma resposta
  if (q1resposta == "Opção 1") {
    resposta1 = resposta1 + 1;
  } else if (q2resposta == "Opção 2") {
    resposta2 = resposta2 + 1;
  } else {
    resposta3 = resposta3 + 1;

  }

  // Verificar tipo de dev


  // const devImg = "";
  // const devDesc = "";
  // const devCaracter = "";

  // Verificar qual possui mais



  if (resposta1 > resposta2 && resposta1 > resposta3) {
    // window.location.href = '/src/result/programerType1.html';
    if (respostas.genero == "masculino") {
      devImg = caracterUserMasculino[0].img;
      devDesc = caracterUserMasculino[0].descricao;
      devCaracter = caracterUserMasculino[0].caracteristica
    } else {
      devImg = caracterUserFeminino[0].img;
      devDesc = caracterUserFeminino[0].descricao;
      devCaracter = caracterUserFeminino[0].caracteristica
    }

  } else if (resposta2 > resposta1 && resposta2 > resposta3) {
    // window.location.href = '/src/result/programerType2.html';
    if (respostas.genero == "masculino") {
      devImg = caracterUserMasculino[1].img;
      devDesc = caracterUserMasculino[1].descricao;
      devCaracter = caracterUserMasculino[1].caracteristica
    } else {
      devImg = caracterUserFeminino[1].img;
      devDesc = caracterUserFeminino[1].descricao;
      devCaracter = caracterUserFeminino[1].caracteristica
    }
  } else {
    // window.location.href = '/src/result/programerType3.html';
    if (respostas.genero == "masculino") {
      devImg = caracterUserMasculino[2].img;
      devDesc = caracterUserMasculino[2].descricao;
      devCaracter = caracterUserMasculino[2].caracteristica
    } else {
      devImg = caracterUserFeminino[2].img;
      devDesc = caracterUserFeminino[2].descricao;
      devCaracter = caracterUserFeminino[2].caracteristica
    }
  }
  console.log("Você é um dev:", devCaracter, devDesc);
  alert("Você é um dev: ", devCaracter, ". Sua descrição é: ", devDesc);
  console.log(resposta1, resposta2, resposta3);
  console.log(respostas);
  console.log("a resposta q1 é ", q1resposta)
}


// Altere o evento associado ao botão "Cadastrar" para chamar a nova função
document.getElementById("btnCadastrar").addEventListener("click", obterRespostasConsole);

// Mantenha a função obterRespostaPergunta no seu arquivo cadastro.js
function obterRespostaPergunta(nomePergunta) {
  const opcoes = document.querySelectorAll(`input[name="${nomePergunta}"]:checked`);

  if (opcoes.length > 0) {
    return opcoes[0].value;
  }

  return null; // Retorna null se nenhuma opção estiver selecionada
}

// Dados de características de dev
const caracterUserMasculino = [
  {
    caracteristica: "Preguiçoso",
    descricao: "Você tem uma abordagem descontraída em relação ao trabalho, preferindo encontrar maneiras eficientes e rápidas de realizar tarefas. Às vezes, a eficiência pode ser confundida com preguiça, mas na verdade, você está sempre buscando otimizar o processo.",
    img: '/assets/img/hPreguicoso.jpg'
  },
  {
    caracteristica: "Monge",
    descricao: "Você é conhecido por sua paciência e abordagem metódica para resolver problemas. Assim como um monge dedicado, você pratica a reflexão profunda e está sempre em busca de aprimorar suas habilidades.",
    img: '/assets/img/hMonge.jpg'
  },
  {
    caracteristica: "Louco",
    descricao: "Sua criatividade e abordagem única para os desafios o destacam como um desenvolvedor 'louco' no melhor sentido. Você está disposto a experimentar soluções não convencionais e pensar fora da caixa.",
    img: '/assets/img/hLouco.jpg'
  }
];

const caracterUserFeminino = [
  {
    caracteristica: "Preguiçosa",
    descricao: "Você tem uma abordagem descontraída em relação ao trabalho, preferindo encontrar maneiras eficientes e rápidas de realizar tarefas. Às vezes, a eficiência pode ser confundida com preguiça, mas na verdade, você está sempre buscando otimizar o processo.",
    img: '/assets/img/mPreguicosa.jpg'
  },
  {
    caracteristica: "Monge",
    descricao: "Você é conhecida por sua paciência e abordagem metódica para resolver problemas. Assim como um monge dedicado, você pratica a reflexão profunda e está sempre em busca de aprimorar suas habilidades.",
    img: '/assets/img/mMonge.jpg'
  },
  {
    caracteristica: "Louca",
    descricao: "Sua criatividade e abordagem única para os desafios a destacam como uma desenvolvedora 'louca' no melhor sentido. Você está disposta a experimentar soluções não convencionais e pensar fora da caixa.",
    img: '/assets/img/mLouca.jpg'
  }
];



