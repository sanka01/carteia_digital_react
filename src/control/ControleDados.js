export function setDados(Entrada, Posicao=undefined) { // Entrada = {nome:"nome", valor:15.20, data:Date("03/05")}
    console.log(Entrada)
   var Entradas = getDados();
   if (Posicao === undefined) Posicao = Object.keys(Entradas).length
   Entradas[Posicao] = Entrada;
   localStorage.setItem("Entradas", JSON.stringify(Entradas));
}

export function getDados() {
    var dados = localStorage.getItem("Entradas");
    console.log(dados)
    return !dados ? {} : JSON.parse(dados);
}
