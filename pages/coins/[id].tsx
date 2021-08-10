import { GetStaticPaths, GetStaticProps } from "next";
import parser from "html-react-parser";
import styles from "../../styles/pages/DynamicPage.module.scss";
import Image from "next/image";
import Link from "next/link";
// Get data with server
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
  );
  const data = await res.json();
  const paths = data.map((coin) => {
    return { params: { id: coin.id, symbol: coin.symbol } };
  });
  return {
    paths,
    fallback: false,
  };
};

// Obtaining paths and details
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const symbol = context.params.symbol;

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id.toString()}?localization=false
  `
  );
  const resApiCoinpaprika = await fetch(
    `https://api.coinpaprika.com/v1/coins/${id}-${symbol}`
  );
  const coin_paprika_data = await resApiCoinpaprika.json();
  const data = await res.json();
  return {
    props: {
      coin: data,
      coin_paprika_data,
    },
  };
};

interface Props {
  coin: any;
  coin_paprika_data: any;
}

const CoinDetails: React.FC<Props> = ({ coin, coin_paprika_data }) => {
  const styleChangerBasedOnpriceChange = (priceChange) => {
    return priceChange > 0 ? { color: "#43aa05" } : { color: "red" };
  };

  console.log(coin);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.thumbnail}>
          {/* <Image src={`${coin.image.large}`} width={40} height={40} /> */}
          <h2> {coin.name}</h2>
          <p>{coin.symbol}</p>
        </div>
        <div className={styles.rankCard}>
          <p>Rank {coin.market_cap_rank}</p>
        </div>
        <div className={styles.information}>
          <h4>
            <span>&#9733;</span>
            Add to favourites
          </h4>
          <ul>
            <li>
              <h4>Website</h4>
              <Link href={`${coin.links.homepage}`} replace>
                <a>Main Website</a>
              </Link>
            </li>
            <li>
              <h4>Source Code</h4>
              <Link href={`${coin.links.repos_url.github[0]}`} replace>
                <a>Souce Code</a>
              </Link>
            </li>
            <li>
              <h4>Explorer</h4>
              <Link
                href={`${coin.links.blockchain_site[0].toString()}`}
                replace
              >
                <a>
                  {
                    coin.links.blockchain_site[0]
                      .replace("https://", "")
                      .split("/")[0]
                  }
                </a>
              </Link>
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
            <li className={styles.high24h}>
              <p>High 24h</p>
              <p>${coin.market_data.high_24h.usd}</p>
            </li>
            <li>
              <p>24h</p>
              <p
                style={styleChangerBasedOnpriceChange(
                  coin.market_data.price_change_percentage_24h
                )}
              >
                {coin.market_data.price_change_percentage_24h}
              </p>
            </li>
            <li>
              <p>Week</p>
              <p
                style={styleChangerBasedOnpriceChange(
                  coin.market_data.price_change_percentage_7d
                )}
              >
                {coin.market_data.price_change_percentage_7d}
              </p>
            </li>
            <li>
              <p>Month</p>
              <p
                style={styleChangerBasedOnpriceChange(
                  coin.market_data.price_change_percentage_30d
                )}
              >
                {coin.market_data.price_change_percentage_30d}
              </p>
            </li>
            <li>
              <p>Year</p>
              <p
                style={styleChangerBasedOnpriceChange(
                  coin.market_data.price_change_percentage_200d
                )}
              >
                {coin.market_data.price_change_percentage_200d}
              </p>
            </li>
          </ul>
        </header>
        <p className={styles.description}>
          {/* Function to parse the HTML inside the API response */}
          {parser(coin.description.en)}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CoinDetails;
