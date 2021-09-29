var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i=0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var Imc = paciente.querySelector(".info-imc");

    if (!pesoEhValido(peso)) {
        Imc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    else if (!alturaEhValida(altura)) {
        Imc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    else {
        Imc.textContent = calculaImc(peso,altura);
    }
}

function calculaImc(peso, altura){
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function pesoEhValido(peso){
    if(peso >= 0 && peso <=600){
        return true;
    }
    else {
        return false;
    }
}

function alturaEhValida(altura){
    if(altura >= 0 && altura <=3.0){
        return true;
    }
    else {
        return false;
    }
}
