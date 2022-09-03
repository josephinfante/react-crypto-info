import AddComma from "../../helpers/AddComma";
import Dateformatter from "../../helpers/Dateformatter";
import { price } from "../../interface/prices";
import "./TabItem.css";

const TabItem = (props: { type: price }) => {
  return (
    <>
      {props.type.prices
        .slice(0)
        .reverse()
        .map((price: [number, number], index) => (
          <div className="tab_content-item" key={index}>
            <div className="item_left">
              <p className="date">{Dateformatter(price[0], "date")}</p>
              <p className="time">{Dateformatter(price[0], "time")}</p>
            </div>
            <div className="item_right">
              <p className="price">{AddComma(Number(price[1].toFixed(2)))}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default TabItem;
