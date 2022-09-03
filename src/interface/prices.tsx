export interface price {
  market_caps: [];
  prices: [];
  total_volumes: [];
}

export interface prices {
  daily: price;
  weekly: price;
  monthly: price;
}
