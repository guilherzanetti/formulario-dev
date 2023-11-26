//variáveis
const programerImage = document.getElementById("programerimage");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const programerDescription = document.getElementById("programerDescription");
const description1 = document.getElementById("description1");
const description2 = document.getElementById("description2");
const description3 = document.getElementById("description3");

//algoritmo.


//seleção de img e texto
if (resultAlg == x) {
    programerImage = image1;
    programerDescription = description1.innerText
} else if (resultAlg == y) {
    programerImage = image2;
    programerDescription = description2.innerText
} else {
    programerImage = image3;
    programerDescription = description3.innerText
}

// Características dos usúarios

const caracterUser = [
    {
        caracteristica: "Preguiçoso",
        descricao: "lorem",
        img: "url"

    },

    {
        caracteristica: "Monge",
        descricao: "lorem",
        img: "url"

    },

    {
        caracteristica: "Louco",
        descricao: "lorem",
        img: "url"

    }
];

//Teste
console.log("teste", caracterUser[2].caracteristica);