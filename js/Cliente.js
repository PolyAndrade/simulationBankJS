export class Cliente {

    constructor(nome, sobrenome, cpf, rg) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._cpf = cpf;
        this._rg = rg;
    }

    get nome() {
        return this._nome;
    }

    get cpf() {
        return this._cpf;
    }
}
