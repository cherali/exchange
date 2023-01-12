export interface HomePageProps {
  marketsList?: Array<Market>;
}
// TODO: complete this interface
export interface Market {
  allowTrailingStop: boolean;
  baseAsset: string;
  baseAssetPrecision: string;
  baseCommissionPrecision: number;
  cancelReplaceAllowed: boolean;
  orderTypes: Array<String>;
  permissions: Array<String>;
  quoteAsset: string;
  quoteAssetPrecision: number;
  quoteCommissionPrecision: number;
  quoteOrderQtyMarketAllowed: boolean;
  quotePrecision: number;
  status: string;
  symbol: string;

}

export interface MarketsResult {
  symbols: Array<Market>;
}

export interface GetMarketsListParams {
}

export interface MarketTickerSocketData {
  ask: string
  askVolume: string
  base: string
  bid: string
  bidVolume: string
  change: string
  changePercent: string
  exchange: string
  high: string
  last: string
  low: string
  open: string
  quote: string
  quoteVolume: string
  sequenceId?: string | number
  timestamp: string
  volume: string
  fullId: string
}

export type MarketTicker = Record<string, MarketTickerSocketData>