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
btnCadastrar.addEventListener("click", (e) =>{
    e.preventDefault();

//cria uma variavel para pegar o valor "nome" inserido
    var valName = nome.value();
// Cria um array vazio
    var arrayNames = [];
// Adiciona o valor ao array
    arrayNames.push(valName);

// Cria e salva o array no local storage
    localStorage.setItem("arrayNames", JSON.stringify(arrayNames));

// ja aproveita o evento e leva o usuario para pagina de destino

window.location.href = "";
});



