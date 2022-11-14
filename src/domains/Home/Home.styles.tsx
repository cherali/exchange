import styled from '@emotion/styled'
import Link from 'next/link'

export const TableContainer = styled.div`
  margin: 1rem auto 0;
  table {
    tbody {
      td {
        padding-right: 1.5rem;
        padding-left: 1.5rem;
      }
    }
  }
  @media only screen and (min-width: 1200px){
    max-width: 1200px;
  }
`

export const ViewAllCurrencies = styled.tr`
  background-color: ${({ theme }) => theme.pallete.primary.lightest};
  text-align: center;

  td {
    cursor: default !important;

    a {
      font-weight: 900;
    }
  }
`

export const SearchContainer = styled.span`
  width: 200px;
  display: block;
  margin-top: -5px;
`

export const AssetName = styled.span`
  display: inline-block;
  line-height: 32px;
  span {
    display: block;
    :nth-of-type(2){
      font-size: 12px;
      color: ${({ theme }) => theme.pallete.primary.darkest};
    }
  }
`

export const TradeLink = styled(Link)`
  padding: 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.pallete.white};
  background-color: ${({ theme }) => theme.pallete.green.main};
  transition: ease 200ms;
  :hover {
    text-decoration: none;
    opacity: 0.9;
  }
`
