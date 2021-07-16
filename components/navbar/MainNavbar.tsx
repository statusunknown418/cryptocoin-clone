import { ExpandableDiv } from "./ExpandableDiv";
import { NavItem } from "./NavItem";
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
      <NavItem name="Our App" imagePath="/ourCoin.svg" />
      <NavItem name="Add Coin/Exchange/ICO" />
      <NavItem name="Newsletter" />
      <NavItem name="" Icon="&#x263C;" />
      <NavItem name="English/USD" />
      <ExpandableDiv />
      <Searchbar />
    </nav>
  );
};
