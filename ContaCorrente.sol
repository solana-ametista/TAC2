// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CaixaEletronico {
    string public nome;
    uint public saldo;

    constructor(string memory _nome) {
        nome = _nome;
        saldo = 0;
    }

    function depositar(uint valor) public {
        require(valor > 0, "O valor do deposito deve ser maior que zero.");
        saldo += valor;
    }

    function sacar(uint valor) public {
        require(valor > 0, "O valor do saque deve ser maior que zero.");
        require(valor <= saldo, "Saldo insuficiente.");
        saldo -= valor;
    }

    function verSaldo() public view returns (uint) {
        return saldo;
    }
}