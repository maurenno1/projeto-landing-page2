var setaDireita = window.document.getElementById("seta-direita")
var leonador = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonador.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:55%"
}

function RolarParaEsquerda() {
    leonador.style ="display:flex"
    bruna.style ="display:none"
    setaDireita.style ="display:flex; margin-top:55%"
    setaEsquerda.style ="display:none"
}