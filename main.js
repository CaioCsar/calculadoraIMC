function form(){

let nome = document.querySelector("input[name=nome]"),nome = nome.value;
let valt = document.querySelector("alt.value");
let peso = document.querySelector("peso.value");
let sMasc = document.querySelector("sexo.value");
let sFem = document.getElementById("sexo.value");
let confirmar = document.getElementById("confirmar");
let limpar = document.getElementById("limpar");
let mostrarR = document.getElementById("mostrarResult");

function limpartxt() {
    nome = "";
    vHora = "";
    hTrabalhadas = "";
    sMasc.checked = false;
    sFem.checked = false;
}

limpar.addEventListener("click", function () {
    limpartxt();
});


confirmar.addEventListener("click", function () {
    mostrarR.innerHTML = nome;
    console.log(nome)
   // limpartxt()
})


/* IMC base */

let sexo = "";
let imc = 0;
let result = "";

function imcDiag() {
    if (sexo == homem) {
        if (imc < 20.7) {
            result = "abaixo do peso";
        }
        else if (imc == 20.7 || imc < 26.4) {
            result = "no peso normal";
        }
        else if (imc == 26.4 || imc < 27.8) {
            result = "marginalmente acima do peso";
        }
        else if (imc == 27.8 || imc < 31.1) {
            result = "acima do peso ideal";
        }
        else if (imc > 31.1) {
            result = "obeso"
        }
    }

    if (sexo == mulher) {
        if (imc < 19.1) {
            result = "abaixo do peso";
        }
        else if (imc == 19.1 || imc < 25.8) {
            result = "no peso normal";
        }
        else if (imc == 25.8 || imc < 27.3) {
            result = "marginalmente acima do peso";
        }
        else if (imc == 27.3 || imc < 32.3) {
            result = "acima do peso ideal";
        }
        else if (imc > 32.3) {
            result = "obeso"
        }
    }
}
}

/* -/-/-/-/-/--/--/---/-/--/- */