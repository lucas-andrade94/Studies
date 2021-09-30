class NaoEncontrado extends Error {
    constructor(nome) {
        super(`O ${nome} não foi encontrado!`);
        this.name = "NaoEncontrado";
        this.idErro = 0;
    }
}

module.exports = NaoEncontrado;
