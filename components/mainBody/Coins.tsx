import Image from "next/image";
import { ReactChildren } from "react";
import {
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Area,
} from "recharts";
import { useFetch } from "../../assets/useFetch";
import styles from "../../styles/modules/Coins.module.scss";
type Props = {
  name: string;
  rank: number;
  identifier: string;
  price: string | number;
  image: string;
  change_1h?: string | number;
  change_24h?: string | number;
  change_7d?: string | number;
  marketCap?: number;
  totalVolume: number;
  sparkline: Array<object>;
  id: string;
  circulatingSupply?: number;
};

export const Coins: React.FC<Props> = ({
  id,
  name,
  rank,
  identifier,
  price,
  image,
  marketCap,
  change_7d,
  change_24h,
  change_1h,
  circulatingSupply,
  totalVolume,
  sparkline,
}) => {
  // Creating svg charts for 7d price change
  const minimizedData = sparkline.slice(50, -1);
  // Converting array of prices to array of obj key-value pairs
  let obj = Object.assign({}, minimizedData);
  let keys = Object.keys(obj);
  const finalArrObj = keys.map((key) => {
    let kvPair = { ...{ x: Number(key) + 1, y: obj[key] * 10 } };
    // kvPair[key] = obj[key];
    return kvPair;
  });

  return (
    <>
      <td className={styles.nameRankImg}>
        <span>{rank}</span>
        <Image src={image} width={20} height={20} alt={`symbol of ${name}`} />
        <span>{name}</span>
        <span>{identifier.toUpperCase()}</span>
      </td>
      <td className={styles.price}>${price.toLocaleString()}</td>
      <td
        style={
          change_24h > 0
            ? { color: "#409e08", textAlign: "center" }
            : { color: "#b5483b", textAlign: "center" }
        }
      >
        {parseFloat(change_24h.toString()).toFixed(3)}%
      </td>
      <td className={styles.sparkline}>
        {sparkline ? (
          <Image
            // Just reversed engineered coinpaprika's work LOL
            src={`https://graphs.coinpaprika.com/currency/chart/${identifier}-${name
              .toLowerCase()
              .replace(" ", "-")}/7d/chart.svg`}
            height={20}
            width={80}
          />
        ) : (
          "Not found"
        )}
        <span
          style={change_7d > 0 ? { color: "#409e08" } : { color: "#b5483b" }}
        >
          {parseFloat(change_7d.toString()).toFixed(3)}%
        </span>
      </td>
      <td className={styles.spacer}>${totalVolume.toLocaleString()}</td>
      {/* <td className={styles.supply}>
        <span>{circulatingSupply}</span>
        <span>{identifier.toUpperCase()}</span>
      </td> */}
      <td className={styles.spacer}>${marketCap.toLocaleString()}</td>
    </>
  );
};
