import React, { useEffect, useMemo, useRef } from "react";
import styles from "./Card.module.css";

const Card = ({
  symbol,
  name,
  coinUrl,
  marketCap,
  price,
  listedAt,
  change,
}) => {
  let changeInCoin = useRef(null);
  useEffect(() => {
    if (changeInCoin.current.innerHTML.includes("-")) {
      changeInCoin.current.style.color = "red";
    } else {
      changeInCoin.current.style.color = "green";
    }
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.coin_image}>
        <img src={coinUrl} alt="Coin-Icon" />
      </span>
      <span className={styles.coin_name}>{name}</span>
      <span className={styles.coin_symbol}>{symbol}</span>
      <span className={styles.coin_price}>${price}</span>
      <span className={styles.coin_price_two}>${listedAt}</span>
      <span className={styles.coin_change} ref={changeInCoin}>
        {change}
      </span>
      <span className={styles.mkt_cap}>Mkt Cap:${marketCap}</span>
    </div>
  );
};

export default Card;
