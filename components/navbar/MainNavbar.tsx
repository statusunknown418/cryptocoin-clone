import { ExpandableDiv } from "./ExpandableDiv";
import { ReusableItem } from "./ReusableItem";
import { Searchbar } from "./Searchbar";
import Link from "next/link";
import styles from "../../styles/modules/MainNavbar.module.scss";
export const MainNavbar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>
          <div />
          coinpaprika
        </a>
      </Link>
      <ReusableItem name="Our App" imagePath="/ourCoin.svg" />
      <ReusableItem name="Add Coin/Exchange/ICO" />
      <ReusableItem name="Newsletter" />
      <ReusableItem name="" Icon="&#x263C;" />
      <ReusableItem name="English/USD" />
      <ExpandableDiv />
      <Searchbar />
    </nav>
  );
};
