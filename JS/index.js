const setaDireita = window.document.getElementById("right-seta");
const setaEsquerda = window.document.getElementById("left-seta");
const imagemUm = window.document.getElementById("img-1");
const imagemDois = window.document.getElementById("img-2");

function rolagemDireita(){
    imagemUm.style = "display:none";
    imagemDois.style = "display:flex";
    setaEsquerda.style = "display:block";
}

function rolagemEsquerda(){
    imagemUm.style = "display:flex";
    imagemDois.style = "display:none";
}

