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


//                                                 Tratando nomes
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
        console.log("O Nome: "+ valNames + " foi adicionado com sucesso!")
      )
    : alert("Por favor, insira um nome válido.");
});


//                                                    tratando respostas

// função para verificar respostas

// function selectedRadio() {
//   const questions = document.querySelectorAll('.perguntas');

  questions.forEach(function (question) {
    const inputClient = question.querySelectorAll('input[type="radio"]');
    const selectedInputClient = Array.from(inputClient).find(input => input.checked);
    
    console.log(selectedInputClient ? selectedInputClient.value : null)
  });
}

document.getElementById("btnCadastrar").addEventListener('click', selectedRadio);
//     questions.forEach(function name(questions) {

//       const inputClient = questions.querySelectorAll ('input[type="radio"]');

//       const selectedInputClient = Array.from(inputClient).find(inputClient => inputClient.checked);
      
//     console.log(selectedInputClient ? selectedInputClient.value : null);
//   });
// };
// document.getElementById("btnCadastrar").addEventListener('click', selectedRadio);

