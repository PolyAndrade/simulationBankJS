export class Conta {

    constructor(conta, agencia, cliente) {
        this._conta = conta;
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
    }

    get conta() {
        return this._conta;
    }

    get agencia() {
        return this._agencia;
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    depositar(valor) {
        if (valor >= 1 && valor <= 1000) this.saldo += valor;
    }

    sacar(valor) {
        if (valor >= 1 && valor <= 1000 && this.saldo >= valor) this.saldo -= valor;
    }
}
