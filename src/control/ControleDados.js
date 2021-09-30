export function addDado(Entrada, Posicao=undefined) { // Entrada = {nome:"nome", valor:15.20, data:Date("03/05")}
   var Entradas = getDados();
   console.log("addDado1:" + JSON.stringify(Entradas))
   if (Posicao === undefined) Posicao = Object.keys(Entradas).length
   Entradas[Posicao] = Entrada;
   console.log("addDado2:" + JSON.stringify(Entradas))
   localStorage.setItem("Entradas", JSON.stringify(Entradas));
}

export function getDados() {
    var dados = localStorage.getItem("Entradas");
    console.log("getDados:" + dados)
    return !dados ? {} : JSON.parse(dados);
}

export function removeDados(Posicao) {
    console.log("removeDados1:" + JSON.stringify(Object.values(getDados())))
    var Entradas = Object.values(getDados());
    Entradas.splice(Posicao, 1)
    console.log("RemoveDados2:" + JSON.stringify(Entradas))
    setDados(Object.assign({}, Entradas))
}

function setDados(Entradas) {
    localStorage.setItem("Entradas", JSON.stringify(Entradas));
}