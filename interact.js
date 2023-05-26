const Web3 = require('web3');

const sender =  '0xd64B3Dbd700f0234B6535a0f2c426fD982B3EbB7';
const ganacheHost = 'HTTP://127.0.0.1:7545';
const contratoEndereco = '0xaba5E1Cb30bC40e941705A4b0F39D3E28F6e704d';
const contratoAbi = [
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nome",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			}
		],
		"name": "sacar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saldoContaCorrente",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

async function interagirComContrato() {
  try {
    const web3 = new Web3(ganacheHost);

    const contrato = new web3.eth.Contract(contratoAbi, contratoEndereco);

    const nome = await contrato.methods.nome().call();
    const saldo = await contrato.methods.saldoContaCorrente().call();

    console.log('Nome:', nome);
    console.log('Saldo:', saldo);

    const valorSaque = 100;
    await contrato.methods.sacar(valorSaque).send({ from: sender }); //Aqui vai gerar erro pois Saldo = 0

    console.log(`Saque de ${valorSaque} realizado com sucesso!`);

	
    const novoSaldo = await contrato.methods.saldoContaCorrente().call();
    console.log('Novo Saldo:', novoSaldo);
  } catch (error) {
    console.error('Erro ao interagir com o contrato:', error);
  }
}

interagirComContrato();
