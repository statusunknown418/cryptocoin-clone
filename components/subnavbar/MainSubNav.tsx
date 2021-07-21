import { useFetch } from "../../assets/useFetch";
import styles from "../../styles/modules/MainSubNav.module.scss";
import { SubNavItem } from "./SubNavItem";
type Props = {};

export const MainSubNav: React.FC<Props> = () => {
  // TODO find type implementation for array ob key value object
  const data: any = useFetch("https://api.coinpaprika.com/v1/global");

  // TODO make function to separate each 3 digits
  // const separate = (n: number) => {
  //   const arrOfNumn = n.toString().split("");
  //   console.log(arrOfNumn);
  // };
  // separate(data.market_cap_usd);
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.container}>
        <SubNavItem name="Market Overview" href="market" />
        {/* The one below has empty href because it's main page */}
        <SubNavItem name="Currencies" href="" />
        <SubNavItem name="Portfolio" href="portfolio" />
        <SubNavItem name="Exchanges" href="exchanges" />
        <SubNavItem name="Transparency" href="transparency" />
      </div>
      <div className={styles.info}>
        <p>
          BTC Dominance: <span>{`${data.bitcoin_dominance_percentage}%`}</span>
        </p>
        <p>
          Vol 24h: <span>{`$${data.volume_24h_ath_value}`}</span>
        </p>
        <p>
          Market Cap: <span>{`$${data.market_cap_usd}`}</span>
        </p>
      </div>
    </nav>
  );
};
