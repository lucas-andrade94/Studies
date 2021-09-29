export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata!!");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    
    get agencia() {
        return this._agencia;
    }

    depositar(valor) {
        if (valor <= 0) {
            return console.log("Valor incorreto, não é possível depositar!");
        }
        this._saldo += valor;
    }

    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato e não deve ser chamado diretamente. Implemente na classe!")
    }

    _sacar(valor, taxa) {
        let valorSacado = taxa*valor;
        if(valorSacado <= this._saldo) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        else {
            console.log("Saldo insuficiente");
            return 0;
        }
    }

    transferir(valor, conta) {
        if (this.sacar(valor == "Saldo insuficiente")) {
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}