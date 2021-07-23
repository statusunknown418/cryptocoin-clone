import Image from "next/image";
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
};

export const Coins: React.FC<Props> = ({
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
}) => {
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
        {change_24h}%
      </p>
      <p>7d change</p>
      <p>{localeString(totalVolume, "", "")}</p>
      <p>Liquidity change</p>
      <p>${marketCap.toLocaleString()}</p>
    </div>
  );
};
