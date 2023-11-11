//Variáveis

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



