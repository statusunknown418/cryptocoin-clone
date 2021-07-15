import { ExpandableDiv } from "./ExpandableDiv";
import { NavItem } from "./NavItem";
import { Searchbar } from "./Searchbar";
import styles from "../../styles/modules/MainNavbar.module.scss";
export const MainNavbar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <NavItem name="Our App" />
      <NavItem name="Add Coin/Exchange/ICO" />
      <NavItem name="Newsletter" />
      <NavItem name="" />
      <NavItem name="English/USD" />
      <ExpandableDiv />
      <Searchbar />
    </nav>
  );
};
