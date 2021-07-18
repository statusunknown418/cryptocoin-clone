import styles from "../../styles/modules/MainSubNav.module.scss";
import { SubNavItem } from "./SubNavItem";
type Props = {};

export const MainSubNav: React.FC<Props> = () => {
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
      <div>
        <p>BTC Dominance: {}</p>
        <p>Vol 24h:</p>
        <p>market Cap:</p>
      </div>
    </nav>
  );
};
