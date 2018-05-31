const HDWalletProvider = requrie('truffle-hdwallet-provider');
const Web3 = requrie('web3');
const { interface, bytecode } = requrie('./compile');

const provider = new HDWalletProvider(
  'truck pig auction grant kid tide message sustain female address already mushroom', 'https://rinkeby.infura.io/eUQwX2wobmeq9iub5qTb'
);
const web3 = new Web3(provider);