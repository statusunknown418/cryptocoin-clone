import styles from "../../styles/modules/MainFooter.module.scss";
import { ReusableItem } from "../navbar/ReusableItem";
type Props = {};

export const MainFooter: React.FC<Props> = () => {
  let updatedTime = new Date();
  // const getTime = ` ${updatedTime.toLocaleString()} UTC`;
  return (
    <div className={styles.breaker}>
      <ul className={styles.container}>
        <ReusableItem name="Terms of Use" />
        <ReusableItem name="Privacy Policy" />
        <ReusableItem name="Contact" />
        <ReusableItem name="Ads on Coinpaprika" />
        <ReusableItem name="Add Coin/Exchange/ICO" />
        <ReusableItem name="API" />
        <ReusableItem name="Tutorials" />
        <ReusableItem name="Blog" />
        <ReusableItem name="Converter" />
        <ReusableItem name="FAQ" />
        <ReusableItem name="About us" />
      </ul>
      {/* <p className={styles.appendices}>Last updated:{getTime}</p> */}
      <p className={styles.appendices}>© coinpaprika 2021</p>
    </div>
  );
};
