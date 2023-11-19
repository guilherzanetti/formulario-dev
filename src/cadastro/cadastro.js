//Variáveis
const nome = document.getElementById("nome");
const btnCadastrar = document.getElementById("btnCadastrar");
const arrayNames = JSON.parse(localStorage.getItem("arrayNames")) || [];
const resposta1 = document.getElementById("").value
const resposta2 = document.getElementById("").value
const resposta3 = document.getElementById("").value
const resposta4 = document.getElementById("").value
const resposta5 = document.getElementById("").value
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




//adicionando um listenning ao botão


btnCadastrar.addEventListener("click", (e) => {
  e.preventDefault();

  const valNames = nome.value;

  arrayNames.push(valNames);

  localStorage.setItem("arrayNames", JSON.stringify(arrayNames));
});