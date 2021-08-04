import styles from "../../styles/modules/MainFooter.module.scss";
import { ReusableItem } from "../navbar/ReusableItem";
type Props = {};

export const MainFooter: React.FC<Props> = () => {
  let updatedTime = new Date();
  // const getTime = ` ${updatedTime.toLocaleString()} UTC`;
  return (
    <div className={styles.breaker}>
      <ul className={styles.container}>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        <p>Ads on Coinpaprika</p>
        <p>Add Coin/Exchange/ICO</p>
        <p>API</p>
        <p>Tutorials</p>
        <p>Blog</p>
        <p>Converter</p>
        <p>FAQ</p>
        <p>About us</p>
      </ul>
      {/* <p className={styles.appendices}>Last updated:{getTime}</p> */}
      <p className={styles.appendices}>© coinpaprika 2021</p>
    </div>
  );
};
