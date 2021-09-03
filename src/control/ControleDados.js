export function setDados(Entrada) { // Entrada = {nome:"nome", valor:15.20, data:Date("03/05")}
   // console.log(Entrada)
   var dados = getDados();
   var jsonEntradas = JSON.stringify(dados);
   jsonEntradas[jsonEntradas.length] = Entrada;
   localStorage.setItem("Entradas", jsonEntradas);
}

function getDados() {
    var dados = localStorage.getItem("Entradas");
    return dados;
}
