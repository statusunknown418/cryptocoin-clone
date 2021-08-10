import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";
import parser from "html-react-parser";

// Get data with server
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
  );
  const data = await res.json();
  const paths = data.map((coin) => {
    console.log(coin.id);
    return { params: { id: coin.id } };
  });
  return {
    paths,
    fallback: false,
  };
};

// Obtaining paths and details
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const res =
    await fetch(`https://api.coingecko.com/api/v3/coins/${id.toString()}?localization=false
  `);

  const data = await res.json();
  return {
    props: {
      coin: data,
    },
  };
};

interface Props {
  coin: any;
}

import styles from "../../styles/pages/DynamicPage.module.scss";

const CoinDetails: React.FC<Props> = ({ coin }) => {
  const styleChangerBasedOnpriceChange = (priceChange) => {
    return priceChange > 0 ? { color: "#43aa05" } : { color: "red" };
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2> {coin.name}</h2>
        <span>{coin.symbol}</span>
        <div className={styles.rankCard}>
          <p>Rank {coin.market_cap_rank}</p>
        </div>
        <div>
          <p>Add to favourites</p>
          <ul>
            <li>
              <h4>Website</h4>
              <p>{coin.links.homepage}</p>
            </li>
            <li>
              <h4>Source Code</h4>
              <p></p>
            </li>
            <li>
              <h4>Explorer</h4>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <header>
          <ul className={styles.dataChange}>
            <li>
              <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
              <p
                style={styleChangerBasedOnpriceChange(
                  coin.market_data.price_change_percentage_24h
                )}
              >
                ({coin.market_data.price_change_percentage_24h}%)
              </p>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </header>
        <p className={styles.description}>
          {/* Function to parse the HTML inside the API response */}
          {coin.description.en}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CoinDetails;
