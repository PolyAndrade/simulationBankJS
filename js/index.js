import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

console.log('simulationBank');

// new cliente
const cliente = new Cliente('Hércules', 'Santos', '99999999999', '9999999');
// console.log(cliente);

// new conta corrente
const contaCorrente = new ContaCorrente('123', '789', cliente);
contaCorrente.depositar(40);
console.log('conta corrente', contaCorrente.saldo);
contaCorrente.sacar(10);
console.log('conta corrente', contaCorrente.saldo);

// new conta poupanca
const contaPoupanca = new ContaPoupanca('456', '789', cliente);
contaPoupanca.depositar(900);
console.log('conta poupança', contaPoupanca.saldo);
contaPoupanca.sacar(200);
console.log('conta poupança', contaPoupanca.saldo);
