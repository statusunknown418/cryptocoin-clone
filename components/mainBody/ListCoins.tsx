import { useFetch } from "../../assets/useFetch";
import styles from "../../styles/modules/ListCoins.module.scss";
import { Coins } from "./Coins";
type Props = {};

export const ListCoins: React.FC<Props> = () => {
  //   const data: any[] = useFetch("https://api.coinpaprika.com/v1/coins");

  const mainData: any[] = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage='1h%2C24h%2C7d'"
  );
  // const images: any[] = useFetch(
  //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  // );

  // images.map((i) => {
  //   return console.log(i.image);
  // });
  // TODO styling
  return (
    <>
      <div className={styles.grid}>
        <p># Name</p>
        <p>Price</p>
        <p>24h</p>
        <p>7d</p>
        <p>Volume 24h</p>
        <p>Liquidity</p>
        <p>MarketCap</p>
      </div>
      <div className={styles.container}>
        {mainData.map((e) => {
          return (
            <div key={e.id}>
              <Coins
                rank={e.market_cap_rank}
                name={e.name}
                identifier={e.symbol}
                price={e.current_price}
                image={e.image}
                change_24h={e.price_change_24h}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
