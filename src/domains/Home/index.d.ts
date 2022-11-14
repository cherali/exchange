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
  E: number;      // Event time
  c: string;      // Close price
  e: string;      // Event type
  h: string;      // High price
  l: string;      // Low price
  o: string;      // Open price
  q: string;      // Total traded quote asset volume
  s: string;      // Symbol
  v: string;      // Total traded base asset volume
}

export type MarketTicker = Record<string, MarketTickerSocketData>