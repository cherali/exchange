import { getExchangesListUrl } from 'constants/urls'
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'utils/apiUtil'
import { GetMarketsListParams, Market, MarketsResult } from './index.d'



export const homeApi = createApi({
  reducerPath: 'assets',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: build => ({
    getMarketsList: build.query<Array<Market>, GetMarketsListParams>({
      query: () => ({
        url: `${getExchangesListUrl}?permissions=SPOT`,
        method: 'GET'
      })
      ,
      transformResponse(response: MarketsResult) {
        return response.symbols
      }
    }),
  })
})

export const {
  useGetMarketsListQuery,
} = homeApi