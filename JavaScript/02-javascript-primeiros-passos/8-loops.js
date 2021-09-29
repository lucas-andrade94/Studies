console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
console.log(`\nDestinos possíveis: \n${listaDeDestinos}\n`);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";
let destinoDisponivel = false;
let posicao = 0;
let contador = 0;

while (contador < listaDeDestinos.length) {
    if (destino == listaDeDestinos[contador]) {
        destinoDisponivel = true;
        break;
    }
    contador++;
}

if (idadeComprador >= 18 || estaAcompanhada && destinoDisponivel) {
    console.log(`Apto a comprar.`);
    listaDeDestinos.splice(contador, 1); //Deletar (começando da posição 1, apenas 1 elemento)
    temPassagemComprada = true;
}
else {
    console.log(`Não pode comprar.`);
    temPassagemComprada = false;
}