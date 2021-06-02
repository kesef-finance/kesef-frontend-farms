import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchOldMigrateBalanceAsync } from 'state/actions'
import { migrateApproval, migrate } from 'utils/callHelpers'
import { useMigrateContract, useOldMigrateContract } from './useContract'

const useMigrate = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const migrateContract = useMigrateContract()
  const oldContract = useOldMigrateContract()

  const handleMigrate = useCallback(
    async (amount: string) => {
      await migrateApproval(oldContract, account, migrateContract.options.address, amount)
      const txHash = await migrate(migrateContract, account)
      dispatch(fetchOldMigrateBalanceAsync(account))
      console.info(txHash)
    },
    [account, dispatch, oldContract, migrateContract],
  )

  return { onMigrate: handleMigrate }
}

export default useMigrate
