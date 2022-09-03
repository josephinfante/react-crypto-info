import { useEffect, useState } from "react";
import { coin } from "../../../interface/coin";
import { price } from "../../../interface/prices";
import customChart from "../../../components/chart/Chart";
import PriceFormatter from "../../../helpers/PriceFormatter";

const useEffectDetail = (id: string) => {
  const [loader, setLoader] = useState<boolean>(true);
  const [coin, setCoin] = useState<coin>({
    id: "",
    symbol: "",
    name: "",
    asset_platform_id: null,
    platforms: { "": "" },
    block_time_in_minutes: 0,
    hashing_algorithm: "",
    categories: [],
    public_notice: null,
    additional_notices: [],
    description: { en: "" },
    links: {
      homepage: [],
      blockchain_site: [],
      official_forum_url: [],
      chat_url: [],
      announcement_url: [],
      twitter_screen_name: "bitcoin",
      facebook_username: "bitcoins",
      bitcointalk_thread_identifier: null,
      telegram_channel_identifier: "",
      subreddit_url: "",
      repos_url: {
        github: [],
        bitbucket: [],
      },
    },
    image: {
      thumb: "",
      small: "",
      large: "",
    },
    country_origin: "",
    genesis_date: new Date(),
    sentiment_votes_up_percentage: 0,
    sentiment_votes_down_percentage: 0,
    market_cap_rank: 0,
    coingecko_rank: 0,
    coingecko_score: 0,
    developer_score: 0,
    community_score: 0,
    liquidity_score: 0,
    public_interest_score: 0,
    market_data: {
      current_price: { usd: 0 },
      total_value_locked: null,
      mcap_to_tvl_ratio: null,
      fdv_to_tvl_ratio: null,
      roi: null,
      ath: { usd: 0 },
      ath_change_percentage: { usd: 0 },
      ath_date: { usd: new Date() },
      atl: { usd: 0 },
      atl_change_percentage: { usd: 0 },
      atl_date: { usd: new Date() },
      market_cap: { usd: 0 },
      market_cap_rank: 1,
      fully_diluted_valuation: { usd: 0 },
      total_volume: { usd: 0 },
      high_24h: { usd: 0 },
      low_24h: { usd: 0 },
      price_change_24h: -138.6081450214,
      price_change_percentage_24h: -0.68953,
      price_change_percentage_7d: -1.51935,
      price_change_percentage_14d: -4.69068,
      price_change_percentage_30d: -12.67295,
      price_change_percentage_60d: -1.44977,
      price_change_percentage_200d: -53.17572,
      price_change_percentage_1y: -59.53826,
      market_cap_change_24h: -3515341881.193,
      market_cap_change_percentage_24h: -0.91174,
      price_change_24h_in_currency: { usd: 0 },
      price_change_percentage_1h_in_currency: { usd: 0 },
      price_change_percentage_24h_in_currency: { usd: 0 },
      price_change_percentage_7d_in_currency: { usd: 0 },
      price_change_percentage_14d_in_currency: { usd: 0 },
      price_change_percentage_30d_in_currency: { usd: 0 },
      price_change_percentage_60d_in_currency: { usd: 0 },
      price_change_percentage_200d_in_currency: { usd: 0 },
      price_change_percentage_1y_in_currency: { usd: 0 },
      market_cap_change_24h_in_currency: { usd: 0 },
      market_cap_change_percentage_24h_in_currency: { usd: 0 },
      total_supply: 0,
      max_supply: 0,
      circulating_supply: 0,
      last_updated: new Date(),
    },
    public_interest_stats: {
      alexa_rank: 0,
      bing_matches: null,
    },
    status_updates: [],
    last_updated: new Date(),
  });
  const [daily, setDaily] = useState<price>({
    market_caps: [],
    prices: [],
    total_volumes: [],
  });
  const [weekly, setWeekly] = useState<price>({
    market_caps: [],
    prices: [],
    total_volumes: [],
  });
  const [monthly, setMonthly] = useState<price>({
    market_caps: [],
    prices: [],
    total_volumes: [],
  });

  useEffect(() => {
    customChart({}).destroy()
    getPrices2(id, "1", setDaily, setLoader)
    getPrices(id, "7", setWeekly)
    getPrices(id, "30", setMonthly)
    getInfo(id, setCoin)
  }, []);

  return { daily, weekly, monthly, coin, loader };
};

export default useEffectDetail;

const getPrices = async (id: string, days: string, name: any) => {
  let result = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
  );
  name(await result.json());
};

const getPrices2 = async (id: string, days: string, name: any, loader: any) => {
  let result = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
  )
  let data: price = await result.json()
  if (data.prices.length != 0) {
    customChart({labels: PriceFormatter({prices: data.prices, type: 'time'}), data: data.prices})
  }
  setTimeout(() => {
    loader(false);
  }, 300);
  name(data)
};

const getInfo = async (id: string, name: any) => {
  let result = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
  name(await result.json());
};
