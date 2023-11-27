//
const selectUser = document.getElementById ("selectUser")

//pegando o array no local storage
var arrayResposta = JSON.parse(localStorage.getItem('arrayResposta')) || [];

//func. de adicionar usuario as opções na pag.
function adUser(user) {

    //faz criar um campo de option no documento
    const option = document.createElement("option");
    
    //declara que o texto e o valor da opção serão virão do parametro user
    option.text = user;
    option.value = user;

    //adiciona a opção ao campo do menu suspenso
    selectUser.appendChild(option);
    
}
console.log(arrayResposta);

//faz um loopin para verificar o indice no arrayNames do nome adicionado e chama a função de adicionar usuario
for (var i = 0; i < arrayResposta.length; i++) {
    adUser(arrayResposta[i]);
  }