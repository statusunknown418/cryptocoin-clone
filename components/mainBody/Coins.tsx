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
};

export const Coins: React.FC<Props> = ({
  name,
  rank,
  identifier,
  price,
  image,
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
      <div>
        <p>${price}</p>
      </div>
    </div>
  );
};
