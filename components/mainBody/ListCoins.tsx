import Image from "next/image";
import { useFetch } from "../../assets/useFetch";
import styles from "../../styles/modules/ListCoins.module.scss";
import { Coins } from "./Coins";
type Props = {};

export const ListCoins: React.FC<Props> = () => {
  //   const data: any[] = useFetch("https://api.coinpaprika.com/v1/coins");

  const mainData: any[] = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  );

  return (
    <div className={styles.region}>
      <table cellSpacing="0" className={styles.tableStyled}>
        <thead className={styles.tHead}>
          <tr className={styles.tableHeads}>
            <th># Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>7d</th>
            <th>Total Volume</th>
            {/* <th>Supply</th> */}
            <th>MarketCap</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {mainData.map((e) => {
            return (
              <tr key={e.id}>
                <Coins
                  rank={e.market_cap_rank}
                  id={e.id}
                  name={e.name}
                  identifier={e.symbol}
                  price={e.current_price}
                  image={e.image}
                  change_24h={e.price_change_percentage_24h}
                  marketCap={e.market_cap}
                  totalVolume={e.total_volume}
                  sparkline={e.sparkline_in_7d.price}
                  change_7d={e.price_change_percentage_7d_in_currency}
                  // circulatingSupply={e.max_supply}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
