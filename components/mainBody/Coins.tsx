import Image from "next/image";
import styles from "../../styles/modules/Coins.module.scss";
type Props = {
  name: string;
  id: string | number;
  symbol: string;
  rank: number;
  identifier: string;
  price: string | number;
};

export const Coins: React.FC<Props> = ({
  id,
  name,
  symbol,
  rank,
  identifier,
  price,
}) => {
  return (
    <div key={id}>
      <div className={styles.container}>
        <span>{rank}</span>
        <div className={styles.regulatorName}>
          <Image src={symbol} width={20} height={20} />
          {name}
        </div>
        <span>{identifier.toUpperCase()}</span>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};
