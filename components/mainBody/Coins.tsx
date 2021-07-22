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
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.nameRankImg}>
        <span>{rank}</span>
        <Image src={image} width={20} height={15} alt="" />
        <span>{name}</span>
        <span>{identifier.toUpperCase()}</span>
      </div>
      <p>${price}</p>
      <p style={change_24h > 0 ? { color: "#409e08" } : { color: "#b5483b" }}>
        {change_24h}%
      </p>
      <p>7d change</p>
      <p>Volume change</p>
      <p>Liquidity change</p>
      <p>Market Cap change</p>
    </div>
  );
};
