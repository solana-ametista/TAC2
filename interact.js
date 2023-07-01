const contractAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_nome",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "valor",
        type: "uint256",
      },
    ],
    name: "depositar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nome",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "valor",
        type: "uint256",
      },
    ],
    name: "sacar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "saldo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verSaldo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractAddress = "0x88Dd495893cF7BacC30f273D6794f06c81Ebf8A9";


const web3Provider = "HTTP://127.0.0.1:7545";


const web3 = new Web3(new Web3.providers.HttpProvider(web3Provider));


const contrato = new web3.eth.Contract(contractAbi, contractAddress);


function depositar() {
  const valor = document.getElementById("deposito").value;

  contrato.methods
    .depositar(valor)
    .send({ from: web3.eth.defaultAccount })
    .on("receipt", function (receipt) {
      console.log(receipt);
      alert("Depósito realizado com sucesso!");
    })
    .on("error", function (error) {
      console.error(error);
      alert("Erro ao realizar o depósito.");
    });
}


function sacar() {
  const valor = document.getElementById("saque").value;

  contrato.methods
    .sacar(valor)
    .send({ from: web3.eth.defaultAccount })
    .on("receipt", function (receipt) {
      console.log(receipt);
      alert("Saque realizado com sucesso!");
    })
    .on("error", function (error) {
      console.error(error);
      alert("Erro ao realizar o saque.");
    });
}


function verSaldo() {
  contrato.methods
    .verSaldo()
    .call({ from: web3.eth.defaultAccount })
    .then(function (result) {
      document.getElementById("saldo").textContent = "Saldo: " + result;
    })
    .catch(function (error) {
      console.error(error);
      alert("Erro ao verificar o saldo.");
    });
}
