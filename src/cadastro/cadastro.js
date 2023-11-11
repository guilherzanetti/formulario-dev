//Variáveis
const nome = document.getElementById("nome");
const btnCadastrar = document.getElementById("btnCadastrar");


// Variáveis
const perguntas = document.querySelectorAll('.perguntas');


// Fazer com que o radio selecionado mude a cor da label
function selectLabel(label, perguntaIndex) {
    // Remove a classe 'selected-label' da sessão de perguntas atual
    const labels = perguntas[perguntaIndex].querySelectorAll('label');
    labels.forEach((l) => {
        l.classList.remove('selected-label');
    });

    // Adiciona a classe 'selected-label' à label clicada
    label.classList.add('selected-label');


};




//adicionando um listenning ao botão
const arrayNames = [];

btnCadastrar.addEventListener("click", (e) => {
  e.preventDefault();

  const valNames = nome.value;

  arrayNames.push(valNames);

  localStorage.setItem("Names", JSON.stringify(arrayNames));
});