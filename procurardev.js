//pegando o select 
const selectUser = document.getElementById ("selectUser")

var item = localStorage.getItem("arrayReposta", JSON.stringify(arrayResposta));

console.log('item')



//func. de adicionar usuario as opções na pag.
function adUser(item) {

    //faz criar um campo de option no documento
    const option = document.createElement("option");
    
    //declara que o texto e o valor da opção serão virão do parametro resposta
    option.text = item;
    option.value = item;

    //adiciona a opção ao campo do menu suspenso
    selectUser.appendChild(option);
    
}
console.log(arrayResposta);

//faz um loopin para verificar o indice no arrayNames do nome adicionado e chama a função de adicionar usuario
for (var i = 0; i < arrayResposta.length; i++) {
    adUser(arrayResposta[i]);
  }