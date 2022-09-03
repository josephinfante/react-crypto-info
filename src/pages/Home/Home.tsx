import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import AddComma from "../../helpers/AddComma";
import { crypto } from "../../interface/crypto";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(true);
  const [coins, setCoins] = useState<crypto[]>([
    {
      ath: 0,
      ath_change_percentage: 0,
      ath_date: new Date(),
      atl: 0,
      atl_change_percentage: 0,
      atl_date: new Date(),
      circulating_supply: 0,
      current_price: 0,
      fully_diluted_valuation: 0,
      high_24h: 0,
      id: "",
      image: "",
      last_updated: new Date(),
      low_24h: 0,
      market_cap: 0,
      market_cap_change_24h: 0,
      market_cap_change_percentage_24h: 0,
      market_cap_rank: 0,
      max_supply: 0,
      name: "",
      price_change_24h: 0,
      price_change_percentage_24h: 0,
      roi: null,
      symbol: "",
      total_supply: 0,
      total_volume: 0,
    },
  ]);
  const [list, setList] = useState<any[]>([]);

  const loadData = async () => {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await response.json();
    if (data) {
      setCoins(data);
      setList(data);
      setTimeout(() => {
        setLoader(false);
      }, 300);
    }
  };

  const search = (text: string) => {
    setList(coins);
    if (text && text.trim() != "") {
      let res = coins.filter((coin) => {
        return (
          coin.name.toLowerCase().includes(text) ||
          coin.symbol.toLowerCase().includes(text)
        );
      });
      setList(res);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div id="Home">
      <input
        type="text"
        placeholder="Search"
        className="search_input"
        onChange={(e) => search(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          loadData();
          setLoader(true);
        }}
      >
        refresh
      </button>
      <div id="cards">
        {list.map((coin) => (
          <div
            className="card_container"
            onClick={() => navigate(`detail/${coin.id}`)}
          >
            <div className="card_left">
              <img
                className="card_image"
                src={coin.image}
                width={50}
                height={50}
              />
              <div className="card_info">
                <p className="info_name">{coin.name}</p>
                <p className="info_initials">{coin.symbol}</p>
              </div>
            </div>
            <div className="card_right">
              <p className="card_price">
                US$ {AddComma(coin.current_price)}
                <span
                  className={
                    coin.price_change_percentage_24h < 0
                      ? "card_percentage red"
                      : "card_percentage green"
                  }
                >
                  ({coin.price_change_percentage_24h.toFixed(1)} %)
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {loader ? <Loader /> : null}
    </div>
  );
};

export default Home;
