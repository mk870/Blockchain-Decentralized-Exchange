//https://eth-ropsten.alchemyapi.io/v2/LsIClVBnWuQIXC67EUQ7Qkt6P1z1cDmq
require('@nomiclabs/hardhat-waffle')
module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/LsIClVBnWuQIXC67EUQ7Qkt6P1z1cDmq',
      accounts:['f74e6fd9b99311ca74e9008644cc1d89f1829152a7e042fb28f162089cb23287']
    }
  }
}