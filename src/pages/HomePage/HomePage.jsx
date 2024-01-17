import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../components/Header/Header";
import Card from "../../components/Cards/Card";
import styles from "./HomePage.module.css";
import RefreshIcon from "/assets/icons/refresh.svg";
import {coinDetail} from "../../apis/coinDetail";

import axios from "axios";
const HomePage = () => {
  let [coinData, setCoinData] = useState({});
  let [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    getCoinData();
  }, []);
 
 const getCoinData = async () => {
    const result = await coinDetail();
    setCoinData(result);
  }
 

  return (
    <div className={styles.home}>
      <Toaster position="top-right" reverseOrder={false} />

      <button
        className={styles.refresh_data}
        onClick={() => {
          toast.success("Data Refreshed !", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
          getCoinData();
        }}
      >
        <img src={RefreshIcon} />
      </button>
      <Header inputHandler={inputHandler} />
      {coinData.length > 0 ? (
        coinData.map((coin, index) => {
          if (coin.name.toLowerCase().includes(inputText)) {
            return (
              <Card
                key={index}
                symbol={coin.symbol}
                name={coin.name}
                coinUrl={coin.iconUrl}
                marketCap={coin.marketCap}
                change={coin.change}
                price={coin.price}
                listedAt={coin.listedAt}
              />
            );
          } else{
            <Card
              key={index}
              symbol={coin.symbol}
              name={coin.name}
              coinUrl={coin.iconUrl}
              marketCap={coin.marketCap}
              change={coin.change}
              price={coin.price}
              listedAt={coin.listedAt}
            />;
          }
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HomePage;
