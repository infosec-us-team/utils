require("@nomiclabs/hardhat-waffle");
require("hardhat-etherscan-abi");
 module.exports = {
     networks: {
      hardhat: {
       chainId: 1,
       forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/YOUR_OWN_API_KEY_HERE!!",
        blockNumber: 15047775
    },
      }
    },
 etherscan: {
        apiKey: "YOUR_OWN_API_KEY_HERE!!"
 },
     solidity: "0.8.4",
};
