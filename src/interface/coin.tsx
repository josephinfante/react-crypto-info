export interface coin {
  additional_notices: any[];
  asset_platform_id: null;
  block_time_in_minutes: number;
  categories: string[];
  coingecko_rank: number;
  coingecko_score: number;
  community_score: number;
  country_origin: string;
  description: Description;
  developer_score: number;
  genesis_date: Date;
  hashing_algorithm: string;
  id: string;
  image: Image;
  last_updated: Date;
  links: Links;
  liquidity_score: number;
  market_cap_rank: number;
  market_data: MarketData;
  name: string;
  platforms: Platforms;
  public_interest_score: number;
  public_interest_stats: PublicInterestStats;
  public_notice: null;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: any[];
  symbol: string;
}

export interface Description {
  en: string;
}

export interface Image {
  large: string;
  small: string;
  thumb: string;
}

export interface Links {
  announcement_url: string[];
  bitcointalk_thread_identifier: null;
  blockchain_site: string[];
  chat_url: string[];
  facebook_username: string;
  homepage: string[];
  official_forum_url: string[];
  repos_url: ReposURL;
  subreddit_url: string;
  telegram_channel_identifier: string;
  twitter_screen_name: string;
}

export interface ReposURL {
  bitbucket: any[];
  github: string[];
}

export interface MarketData {
  ath: { [key: string]: number };
  ath_change_percentage: { [key: string]: number };
  ath_date: { [key: string]: Date };
  atl: { [key: string]: number };
  atl_change_percentage: { [key: string]: number };
  atl_date: { [key: string]: Date };
  circulating_supply: number;
  current_price: { [key: string]: number };
  fdv_to_tvl_ratio: null;
  fully_diluted_valuation: { [key: string]: number };
  high_24h: { [key: string]: number };
  last_updated: Date;
  low_24h: { [key: string]: number };
  market_cap: { [key: string]: number };
  market_cap_change_24h: number;
  market_cap_change_24h_in_currency: { [key: string]: number };
  market_cap_change_percentage_24h: number;
  market_cap_change_percentage_24h_in_currency: { [key: string]: number };
  market_cap_rank: number;
  max_supply: number;
  mcap_to_tvl_ratio: null;
  price_change_24h: number;
  price_change_24h_in_currency: { [key: string]: number };
  price_change_percentage_14d: number;
  price_change_percentage_14d_in_currency: { [key: string]: number };
  price_change_percentage_1h_in_currency: { [key: string]: number };
  price_change_percentage_1y: number;
  price_change_percentage_1y_in_currency: { [key: string]: number };
  price_change_percentage_200d: number;
  price_change_percentage_200d_in_currency: { [key: string]: number };
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: { [key: string]: number };
  price_change_percentage_30d: number;
  price_change_percentage_30d_in_currency: { [key: string]: number };
  price_change_percentage_60d: number;
  price_change_percentage_60d_in_currency: { [key: string]: number };
  price_change_percentage_7d: number;
  price_change_percentage_7d_in_currency: { [key: string]: number };
  roi: null;
  total_supply: number;
  total_value_locked: null;
  total_volume: { [key: string]: number };
}

export interface Platforms {
  "": string;
}

export interface PublicInterestStats {
  alexa_rank: number;
  bing_matches: null;
}
