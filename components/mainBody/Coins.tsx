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
  // console.log(finalArrObj);

  // -----------------
  const localeString = (x, sep, grp) => {
    var sx = ("" + x).split("."),
      s = "",
      i,
      j;
    sep || (sep = " "); // default seperator
    grp || grp === 0 || (grp = 3); // default grouping
    i = sx[0].length;
    while (i > grp) {
      j = i - grp;
      s = sep + sx[0].slice(j, i) + s;
      i = j;
    }
    s = sx[0].slice(0, i) + s;
    sx[0] = s;
    return sx.join(".");
  };

  return (
    <div className={styles.container}>
      <div className={styles.nameRankImg}>
        <p>{rank}</p>
        <Image src={image} width={20} height={7} alt="" />
        <p>{name}</p>
        <p>{identifier.toUpperCase()}</p>
      </div>
      <p>${localeString(price, "", "")}</p>
      <p style={change_24h > 0 ? { color: "#409e08" } : { color: "#b5483b" }}>
        {parseFloat(change_24h.toString()).toFixed(3)}%
      </p>
      <div className={styles.sparkline}>
        <div>
          {identifier ? (
            <Image
              // Just reversed engineered coinpaprika's work LOL
              src={`https://graphs.coinpaprika.com/currency/chart/${identifier}-${name
                .toLowerCase()
                .replace(" ", "-")}/7d/chart.svg`}
              height={20}
              width={100}
            />
          ) : (
            "Not found"
          )}
        </div>
        <p style={change_7d > 0 ? { color: "#409e08" } : { color: "#b5483b" }}>
          {parseFloat(change_7d.toString()).toFixed(3)}%
        </p>
      </div>
      <p>${localeString(totalVolume, "", "")}</p>
      <p>Liquidity change</p>
      <p>${marketCap.toLocaleString()}</p>
    </div>
  );
};
