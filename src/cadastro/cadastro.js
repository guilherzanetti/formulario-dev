//Variáveis
const formInfo = document.getElementById("form-info")
const nome = document.getElementById("nome")


//fazer com que o radio selecionado mude a cor da label
function selectLabel(label) {
    // Remove a classe 'selected-label' de todas as labels
    const labels = document.querySelectorAll('label');
    labels.forEach((l) => {
        l.classList.remove('selected-label');
    });

    // Adiciona a classe 'selected-label' à label clicada
    label.classList.add('selected-label');
}

//adicionando um listenning ao botão
botaox.addEventListener("click", (e) =>{
    e.preventDefault();

//cria uma variavel para colocar o nome inserido
    var adName = nome.value();
// Cria um array vazio
    var arrayNames = [];
// Adiciona o valor ao array
    arrayNames.push(adName);

// Cria e salva o array no local storage
    localStorage.setItem("arrayNomes", JSON.stringify(arrayNomes));

});



