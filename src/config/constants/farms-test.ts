import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'KSF-BUSD LP',
    lpAddresses: {
      97: '0x095e43285Fd6c09e271Dc404744a400C945CCc80',
      56: '0x9D244Bd577845B52a00C1aD022703952B96bCCF1',
    },
    tokenSymbol: 'KSF',
    tokenAddresses: {
      97: '0x300D9Cf7D11eC9bC9D19dB0711a4888ffb1EEd1f',
      56: '0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 5,
    lpSymbol: 'KSF-BNB LP',
    lpAddresses: {
      97: '0x9F5f6D4aF3853E44346b40795DA7432ee93f81ca',
      56: '0x0bb0365C92d537D5814Dc6259B82A29E5c4DC186',
    },
    tokenSymbol: 'KSF',
    tokenAddresses: {
      97: '0x300D9Cf7D11eC9bC9D19dB0711a4888ffb1EEd1f',
      56: '0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 0,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x14A5742e5fa380488a11cc81D091423c8D8CC6d2',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x41d5c6d80637654173C312b3B0Da437996598525',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KSF',
    lpAddresses: {
      97: '0x095e43285Fd6c09e271Dc404744a400C945CCc80',
      56: '0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28', // KSF-BUSD LP
    },
    tokenSymbol: 'KSF',
    tokenAddresses: {
      97: '0x300D9Cf7D11eC9bC9D19dB0711a4888ffb1EEd1f',
      56: '0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '0x095e43285Fd6c09e271Dc404744a400C945CCc80',
      56: '0x2aa709145c82c0bea1eb50ae168b0e53a0f19f41', // KSF-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xF2d976Fe2D38Bb2acA8ed2f1337406c7Bb1097BB',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '0x14A5742e5fa380488a11cc81D091423c8D8CC6d2',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '0x52b8817c7d9d02ee18a65f825aa8fa8a513306c4',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
