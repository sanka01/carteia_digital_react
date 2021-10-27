export function addDado(dados,Entrada, Posicao=undefined) { // Entrada = {nome:"nome", valor:15.20, data:Date("03/05")}
   var Entradas = getDados(dados);
   console.log("addDado1:" + JSON.stringify(Entradas))
   if (Posicao === undefined) Posicao = Object.keys(Entradas).length
   Entradas[Posicao] = Entrada;
   console.log("addDado2:" + JSON.stringify(Entradas))
   localStorage.setItem(dados, JSON.stringify(Entradas));
}

export function getDados(nome) {
    console.log(nome);
    var dados = localStorage.getItem(nome);
    console.log("getDados:" + dados)
    return !dados ? {} : JSON.parse(dados);
}

export function removeDados(dados,Posicao) {
    console.log("removeDados1:" + JSON.stringify(Object.values(getDados(dados))))
    var Entradas = Object.values(getDados(dados));
    Entradas.splice(Posicao, 1)
    console.log("RemoveDados2:" + JSON.stringify(Entradas))
    setDados(dados, Object.assign({}, Entradas))
}

function setDados(dados, Entradas) {
    localStorage.setItem(dados, JSON.stringify(Entradas));
}