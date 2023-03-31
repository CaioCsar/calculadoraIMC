window.onload = function form() {
    let nome = document.getElementById("nome")
    let valt = document.getElementById("alt");
    let peso = document.getElementById("peso");
    let sMasc = document.getElementById("masc");
    let sFem = document.getElementById("fem");
    let confirmar = document.getElementById("confirmar");

    let sexo = "";
    let result = "";
    var imc = 0;


    let mostrarR = document.getElementById("mostrarResult");

    document.getElementById("limpar").addEventListener("click", function () {
        nome.value = "";
        valt.value = "";
        peso.value = "";
        sMasc.checked = false;
        sFem.checked = false;
        mostrarR.innerHTML = "";
    }
    )

    /* IMC base */

    function imcDiag() {
        imc = (peso.value) / ((valt.value) ** 2)

        if(sMasc.checked){
            sexo = "homem" 
        }
        else if(sFem.checked){
            sexo = "mulher"
        }

        if (sexo == "homem") {
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

        if (sexo == "mulher") {
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
        if(typeof imc !== Number){
            return "Sem Diagnóstico"
        }
        return result;
    }


    /* -/-/-/-/-/--/--/---/-/--/- */

    /* botao confirmar */

    confirmar.addEventListener("click", function () {
        var imc = (peso.value) / ((valt.value) ** 2)
        mostrarR.innerHTML = "Nome: " + nome.value +
            "<br>" + "IMC: " + (imc).toFixed(2) +
            "<br>" + "Diagnóstico: " + imcDiag()

    })

}