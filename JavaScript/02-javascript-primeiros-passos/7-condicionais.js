console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = true;

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Apto a comprar.`);
    listaDeDestinos.splice(1, 1); //Deletar (começando da posição 1, apenas 1 elemento)
}
else {
    console.log(`Menor de idade e não está acompanhado, não pode comprar.`);
}

console.log(listaDeDestinos);