import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    constructor(conta, agencia, cliente) {
        super(conta, agencia, cliente);
    }
}
