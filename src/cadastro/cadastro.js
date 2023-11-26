// frontend-frontend-frontend-frontend-frontend-frontend-frontend-frontend-frontend-frontend-frontend-
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


// Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-Backend-


//                                                 Tratando nomes
//Variáveis
const nome = document.getElementById("nome");
const btnCadastrar = document.getElementById("btnCadastrar");
const arrayNames = JSON.parse(localStorage.getItem("arrayNames")) || [];

//adicionando um listenning ao botão


btnCadastrar.addEventListener("click", (e) => {
  e.preventDefault();

  const valNames = nome.value.trim();

  valNames != ""
    ? (
        arrayNames.push(valNames),
        localStorage.setItem("arrayNames", JSON.stringify(arrayNames)),
        console.log("O Nome: "+ valNames + " foi adicionado com sucesso!")
      )
    : alert("Por favor, insira um nome válido.");

});


//                                                    tratando respostas


        // Adicione esta função ao seu arquivo cadastro.js
        function obterRespostasConsole() {
          const nome = document.querySelector('#nome').value;
          const respostas = {
              nome: nome,
              genero: obterRespostaPergunta('genero'),
              q1: obterRespostaPergunta('q1'),
              q2: obterRespostaPergunta('q2'),
              q3: obterRespostaPergunta('q3'),
              q4: obterRespostaPergunta('q4'),
              q5: obterRespostaPergunta('q5'),
              // Adicione mais perguntas conforme necessário
          };

          const q1resposta = respostas.q1
          const q2resposta = respostas.q2
          const q3resposta = respostas.q3
          const q4resposta = respostas.q4
          const q5resposta = respostas.q5

          let resposta1 = 0;
          let resposta2 = 0;
          let resposta3 = 0;

          // Verificação da quantidade da mesma resposta
          if (q1resposta == "Opção 1") {
              resposta1 = resposta1 + 1;
          } else if (q2resposta == "Opção 2") {
              resposta2 = resposta2 + 1;
          } else {
              resposta3 = resposta3 + 1;
          }


          // Verificar qual possui mais

          if (resposta1 > resposta2 && resposta1 > resposta3) {
              window.location.href = '/src/result/programerType1.html';
          }else if(resposta2 > resposta1 && resposta3){
              window.location.href = '/src/result/programerType2.html';
          } else{
              window.location.href = '/src/result/programerType3.html';
          }

          console.log(resposta1, resposta2, resposta3);
          console.log(respostas);
          console.log("a resposta q1 é ", q1resposta)
      }

      // Altere o evento associado ao botão "Cadastrar" para chamar a nova função
      document.getElementById("btnCadastrar").addEventListener("click", obterRespostasConsole);

      // Mantenha a função obterRespostaPergunta no seu arquivo cadastro.js
      function obterRespostaPergunta(nomePergunta) {
          const opcoes = document.querySelectorAll(`input[name="${nomePergunta}"]:checked`);

          if (opcoes.length > 0) {
              return opcoes[0].value;
          }

          return null; // Retorna null se nenhuma opção estiver selecionada
      }
