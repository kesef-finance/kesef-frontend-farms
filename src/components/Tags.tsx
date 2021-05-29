import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.textSubtle};
`

const NoFeeTag = () => (
  <Wrapper>
  <Tag variant="success" outline startIcon={<VerifiedIcon />}>
    No Fees
  </Tag>
  </Wrapper>
)

const RiskTag = ({ risk }) => (
  <Wrapper>
  <Tag variant={risk >= 3 ? 'failure' : 'success'} outline startIcon={<VerifiedIcon />}>
    Risk {risk}
  </Tag>
  </Wrapper>
)

const CoreTag = () => (
  <Wrapper>
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
  </Wrapper>
)

const CommunityTag = () => (
  <Wrapper>
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
  </Wrapper>
)

const BinanceTag = () => (
  <Wrapper>
  <Tag variant="binance" outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
  </Wrapper>
)

export { CoreTag, CommunityTag, BinanceTag, RiskTag, NoFeeTag }
