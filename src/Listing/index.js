import React from "react";
import { data } from "./etsy.js";

const list = JSON.parse(data);
const items = list.filter((item) => item.state === "active");
console.log(items);

export default function Listing() {
  return (
    <div className="page">
      <div className="item-list">
        {items.map((item) => (
          <div className="item" key={item.listing_id}>
            <div className="wrapper">
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage["url_570xN"]} />
                </a>
              </div>
            </div>
            <div className="wrapper">
              <div className="item-details">
                <p className="item-title">
                  {item.title.length > 50
                    ? item.title.slice(0, 50) + "..."
                    : item.title}
                </p>
              </div>
              <div className="wrapper">
                <p className="item-price">
                  {item.currency === "USD"
                    ? "$" + item.price
                    : item.currency === "EUR"
                    ? "€" + item.price
                    : item.price + " GBP"}
                </p>
                <p
                  className={
                    item.quantity <= 10
                      ? "item-quantity level-low"
                      : 10 < item.quantity <= 20
                      ? "item-quantity level-medium"
                      : "item-quantity level-high"
                  }
                >
                  {item.quantity} left
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
