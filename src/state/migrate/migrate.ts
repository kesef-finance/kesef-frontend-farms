import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import migrateABI from 'config/abi/migrate.json'
import multicall from 'utils/multicall'
import { getOldMigrateAddress } from 'utils/addressHelpers'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchOldMigrateBalance = async (account: string) => {
  const oldToken = getOldMigrateAddress()
  
  const calls = [{
      address: oldToken,
      name: 'balanceOf',
      params: [account],
    }]

  const rawBalances = await multicall(erc20ABI, calls)
  const parsedBalances = rawBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedBalances
}

export default fetchOldMigrateBalance