import { arrayNames } from "./cadastro.js";







//ao clicar no btn "buscar" ele dispara um evendo que pega o valor

btnDiscovery.addEventListener("click", (e) =>{

    var storedNames = localStorage.getItem("arrayNames") ? JSON.parse(localStorage.getItem("names")) : [];
   
    for (let i = 0; i < storedNames.length; i++) {
       
       if (storedNames[i] === valorDataSearch) {
           window.location.href = storedNames[i]
           break;
       }
       
    }
    
   });