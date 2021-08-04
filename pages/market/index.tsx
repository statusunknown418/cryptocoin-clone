import Image from "next/image";
import Link from "next/link";
import { HistoryChart } from "../../components/marketPage/HistoryChart";
import styles from "../../styles/pages/Market.module.scss";
export default function marketOverview() {
  return (
    <div className={styles.grid}>
      <HistoryChart name="Market Cap" />
      <HistoryChart name="Bitcoin" designation="BTC" />
    </div>
  );
}
