// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ContratoContaCorrente {
    string public nome;
    uint public saldoContaCorrente;


    function get() public view returns (uint) {
        return (saldoContaCorrente);
    }

    function sacar(uint valor) public {
        require(valor <= saldoContaCorrente, "Saldo insuficiente");
        saldoContaCorrente -= valor;
    }
}