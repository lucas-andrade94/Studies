console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

console.log(listaDeDestinos);

listaDeDestinos.push("Curitiba");

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //Deletar (começando da posição 1, apenas 1 elemento)

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);