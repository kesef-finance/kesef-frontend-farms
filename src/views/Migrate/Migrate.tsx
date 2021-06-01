import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Button, Image, Heading, Text } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import useRefresh from 'hooks/useRefresh'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { fetchOldMigrateBalanceAsync } from 'state/actions'
import useMigrate from 'hooks/useMigrate'
import { useOldMigrateBalance } from 'state/hooks'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const Migrate: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const [pendingTx, setPendingTx] = useState(false)
  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    if (account) {
      dispatch(fetchOldMigrateBalanceAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const { onMigrate } = useMigrate()

  const balance = useOldMigrateBalance()

  console.log("balance", balance)
 
  return (
    <Page>
        <StyledHero>
          <Heading as="h3" size="xl" color="secondary" mb="24px">
            Migrate to new KSF Contract
          </Heading>
          <Heading as="h2" size="lg" color="secondary">
            {TranslateString(999, 'Old dxSale Contract : 0xd99E6E78b613C2dAF2B0DE4f2EE09CCd6Bf06Cd4')}
          </Heading>
          <Heading as="h2" style={{ marginTop: '1rem' }} size="lg" color="primary">
            {TranslateString(999, 'New Contract : 0xf056c78ae863b08808c1fe3c0f8a7db2a4fdcf28')}
          </Heading>
        </StyledHero>

        <Button
          disabled={!Number(balance)}
          onClick={async () => {
            setPendingTx(true)
            await onMigrate(balance)
            setPendingTx(false)
          }}
        >
          {TranslateString(999, 'Migrate')}
        </Button>

    </Page>
  )
}

export default Migrate
