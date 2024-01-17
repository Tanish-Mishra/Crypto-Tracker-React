import React from 'react'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
export const coinDetail = async () => {
    try {
        const options = {
            method: "GET",
            url: "https://coinranking1.p.rapidapi.com/coins",
            params: {
              referenceCurrencyUuid: "yhjMzLPhuIDl",
              timePeriod: "24h",
              "tiers[0]": "1",
              orderBy: "marketCap",
              orderDirection: "desc",
              limit: "50",
              offset: "0",
            },
            headers: {
              "X-RapidAPI-Key": `${import.meta.env.VITE_COIN_API_DATA}`,
              "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            },
          };
          const response = await axios.request(options);
          return response.data.data.coins
    } catch(error) {
      toast.error("Failed to Load API", {
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
    }

}
