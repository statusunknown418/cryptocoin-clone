import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useFetch } from "../../assets/useFetch";
import styles from "../../styles/modules/Searchbar.module.scss";
type Props = {};
// TODO finish the searchBar
export const Searchbar: React.FC<Props> = () => {
  const [search, setSearch] = useState<Array<Object>>([]);
  const coins = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage='1h%2C24h%2C7d%2C14d'"
  );
  // TODO finish search-as-you-type implementation
  const filterSearch = (coins, query) => {
    if (query) {
      return "";
    }
    return coins.filter((e) => {
      const name = e.name.toLowerCase();
      return name.includes(query);
    });
  };
  return (
    <form className={styles.container}>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Search in coinpaprika clone"
      />
      <i>
        <FontAwesomeIcon icon={faSearch} width={15} height={15} />
      </i>
    </form>
  );
};
