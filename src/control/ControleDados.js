export function addDado(Entrada, Posicao=undefined) { // Entrada = {nome:"nome", valor:15.20, data:Date("03/05")}
   var Entradas = getDados();
   if (Posicao === undefined) Posicao = Object.keys(Entradas).length
   Entradas[Posicao] = Entrada;
   localStorage.setItem("Entradas", JSON.stringify(Entradas));
}

export function getDados() {
    var dados = localStorage.getItem("Entradas");
    console.log("getDados:" + dados)
    return !dados ? {} : JSON.parse(dados);
}

export function removeDados(Posicao) {
    var Entradas = Object.values(getDados());
    Entradas.splice(Posicao, 1)
    setDados(Object.assign({}, Entradas))
}

function setDados(Entradas) {
    localStorage.setItem("Entradas", JSON.stringify(Entradas));
}