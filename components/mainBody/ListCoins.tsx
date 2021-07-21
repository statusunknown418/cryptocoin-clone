import { useFetch } from "../../assets/useFetch";
import styles from "../../styles/modules/ListCoins.module.scss";
import { Coins } from "./Coins";
type Props = {};

export const ListCoins: React.FC<Props> = () => {
  //   const data: any[] = useFetch("https://api.coinpaprika.com/v1/coins");
  const data: any[] = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  // TODO help with styling
  return (
    <>
      <div className={styles.wrapper}>
        <p>Name</p>
        <p>Price</p>
        <p>1h</p>
        <p>24h</p>
        <p>24h</p>
        <p>24h</p>
        <p>24h</p>
        <p>24h</p>
        <p>24h</p>
        <p>24h</p>
      </div>
      <div className={styles.container}>
        {data.map((e) => {
          return (
            <div key={e.id}>
              <Coins
                rank={e.market_cap_rank}
                id={e.id}
                name={e.name}
                identifier={e.symbol}
                symbol={e.image}
                price={e.ath}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
