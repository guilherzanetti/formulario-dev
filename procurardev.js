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

const btnProcurarDevs = document.getElementById("btnProcurarDevs");

btnProcurarDevs.addEventListener("click", function name(params) {
    client
})