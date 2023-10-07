/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'goerli',
    networks: {
      hardhat: {},
      goerli: {
        url: 'https://rpc.ankr.com/eth_goerli',
        accounts: [`6a09a66aa5e9a5ed4d37e1f9f2740a695e6bd4d8456fbefb77deafce20b3d222`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};