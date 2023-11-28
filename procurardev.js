//pegando o select 
const selectUser = document.getElementById ("selectUser")

var client = localStorage.getItem("arrayReposta"); 
var client = JSON.parse(client);
console.log(client[0].nome);

if (client) {
    client.forEach(function (client) {
        const option = document.createElement("option");
        
        option.text = client.nome
        option.value = client.nome
        selectUser.appendChild(option);
    });
};


// Define a função que será chamada quando o link for clicado
function chamarFuncao() {
   // Obtém o valor selecionado do select
   const selectedValue = selectUser.value;
    console.log(selectedValue);

    // Encontra o objeto correspondente no arrayResposta com base no nome
    const selectedClient = client.find(client => client.nome === selectedValue)
   // Chama a função com o valor selecionado como parâmetro
   obterRespostasConsole(selectedClient);
};