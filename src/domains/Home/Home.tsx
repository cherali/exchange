import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Table, { Column } from 'components/basics/Table'
import Input from 'components/basics/Input'
import ChangeValue from 'components/ChangeValue'
import { landingMarkeCountLimit } from 'constants/constants'
import Price from './Price'
import { AssetName, SearchContainer, TableContainer, TradeLink, ViewAllCurrencies } from './Home.styles'
import useSocket from 'providers/SocketProvider/useSocket'
import type { HomePageProps, Market, MarketTicker, MarketTickerSocketData } from './index.d'


const HomePage: FC<HomePageProps> = ({ marketsList }) => {
  const socketData = useMemo(() => ({
    id: '!miniTicker@arr@3000',
    base: '',
    quote: '',
  }), [])

  const [value, setValue] = useState<string>('')
  const [marketTicker, setMarketTicker] = useState<MarketTicker>()
  const { subscribeTicker, unsubscribeTicker } = useSocket()

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value)
  }

  // TODO: use marketTicker to update rows
  const columns: Array<Column<Market>> = [
    {
      accessor: 'assetCode',
      header: <SearchContainer>
        <Input
          startIcon={<span><img width={'20px'} alt='search' src='https://cdn-icons-png.flaticon.com/512/149/149852.png' /></span>}
          value={value}
          onChange={handleChange}
          clearable
        />
      </SearchContainer>,
      width: '15%',
      Cell: ({ baseAsset, quoteAsset }) => {
        return <AssetName><span>{baseAsset}/{quoteAsset}</span><span>{baseAsset} to {quoteAsset === 'USDT' ? 'Tether' : quoteAsset}</span></AssetName>
      },

    },
    {
      accessor: 'spread',
      header: 'Spread',
      defaultValue: '0.00',
    },
    {
      accessor: 'sell',
      header: 'Sell',
      defaultValue: '0.0',
      Cell: ({ quoteAssetPrecision, symbol }) => {
        const market = marketTicker?.[symbol]
        return <>
          <Price>{(Number(market?.l || 0)).toFixed(quoteAssetPrecision)}</Price>
        </>
      }
    },
    {
      accessor: '',
      header: '',
      width: '38px',
      Cell: () => {
        return <TradeLink href='/'>Sell</TradeLink>
      }
    },
    {
      accessor: 'buy',
      header: 'Buy',
      defaultValue: '0.00',
      Cell: ({ quoteAssetPrecision, symbol }) => {
        const market = marketTicker?.[symbol]
        return <>
          <Price>{(Number(market?.h || 0)).toFixed(quoteAssetPrecision)}</Price>
        </>
      }
    },
    {
      accessor: '',
      header: '',
      width: '38px',
      Cell: () => {
        return <TradeLink href='/'>Buy</TradeLink>
      }
    },
    {
      accessor: 'ch',
      header: 'Chg%',
      Cell: ({ symbol }) => {
        const market = marketTicker?.[symbol]
        return <ChangeValue>{(Number(market?.c || 0) - Number(market?.o || 0)).toFixed(2)}</ChangeValue>
      }
    },
    {
      accessor: 'chart',
      header: 'Charts (2 days)',
      defaultValue: '...',
    },
  ]



  useEffect(() => {
    subscribeTicker<MarketTickerSocketData>(socketData, tickers => {
      // convert to object
      const newData: MarketTicker = {}
      tickers.forEach(ticker => {
        newData[ticker.s] = ticker
      })

      setMarketTicker(s => ({ ...s, ...newData }))
    })
    return () => {
      unsubscribeTicker(socketData)
    }
  }, [])


  return (
    <div>
      <TableContainer>
        <Table
          columns={columns}
          data={marketsList?.slice(0, landingMarkeCountLimit)}
          loading={false}
          showTableNumber
          extendBody={
            <ViewAllCurrencies>
              <td colSpan={8}><Link href='/'>View all cryptocurrencies</Link></td>
            </ViewAllCurrencies>
          }
        />
      </TableContainer>
    </div>
  )
}

export default HomePage