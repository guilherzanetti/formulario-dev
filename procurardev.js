//pegando o select 
const selectUser = document.getElementById ("selectUser")

var client = localStorage.getItem("arrayReposta"); 

if (client) {
    var client = JSON.parse(client);
    var nomeDoObjt = client[0].nome;

  function adUser(client) {
  var client = localStorage.getItem("arrayReposta");  
    //faz criar um campo de option no documento
    const option = document.createElement("option");
    
    //declara que o texto e o valor da opção serão virão do parametro resposta
    option.text = client;
    option.value = client;

    //adiciona a opção ao campo do menu suspenso
    selectUser.appendChild(option);
    }  
};
console.log(client[0].nome);

//func. de adicionar usuario as opções na pag.



//faz um loopin para verificar o indice no arrayNames do nome adicionado e chama a função de adicionar usuario
for (var i = 0; i < arrayResposta.length; i++) {
    adUser(arrayResposta[i]);
  }