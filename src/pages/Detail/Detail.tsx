import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import AddComma from "../../helpers/AddComma";
import useEffectDetail from "./hooks/useEffect";
import "./Detail.css";
import TabItem from "../../components/tab/TabItem";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [selectedTab, setSelectedTab] = useState<string>("tab1");
  const { daily, weekly, monthly, coin, loader } = useEffectDetail(
    params.id || ""
  );
  const tabs = [
    { name: "24 Hours", value: "tab1" },
    { name: "Week", value: "tab2" },
    { name: "Month", value: "tab3" },
  ];

  return (
    <div id="detail">
      <button className="back_button" onClick={() => navigate(-1)}>
        <img className="button-image" src='../../../icons/chevron-left-solid.png' width={30} height={30}/>
        <p className="button-text">Go back</p>
      </button>
      <div id="header">
        <img
          className="header_logo"
          src={coin.image["large"]}
          width={100}
          height={100}
        />
        <p className="header_title">{coin.name}</p>
      </div>
      <div id="container">
        <div id="left">
          <canvas id="chart"></canvas>
          <ul className="tabs">
            {tabs.map((tab, index) => (
              <li
                className={selectedTab === tab.value ? "active_tab" : ""}
                key={index}
                onClick={() => setSelectedTab(tab.value)}
              >
                {tab.name}
              </li>
            ))}
          </ul>
          <div className="price">
            <div className="price_value">
              <p className="value">
                US$ {AddComma(coin.market_data.current_price["usd"])}
              </p>
              <p className="subtitle">Price</p>
            </div>
            <div className="spacer"></div>
            <div className="price_percentage">
              <p
                className={
                  coin.market_data.market_cap_change_percentage_24h < 0
                    ? "percentage red"
                    : "percentage green"
                }
              >
                {coin.market_data.market_cap_change_percentage_24h.toFixed(2)} %
              </p>
              <p className="subtitle">Change</p>
            </div>
          </div>
        </div>
        <div id="right">
          {selectedTab === "tab1" ? (
            <TabItem type={daily} />
          ) : selectedTab === "tab2" ? (
            <TabItem type={weekly} />
          ) : selectedTab === "tab3" ? (
            <TabItem type={monthly} />
          ) : null}
        </div>
      </div>
      {loader ? <Loader /> : null}
    </div>
  );
};

export default Detail;
