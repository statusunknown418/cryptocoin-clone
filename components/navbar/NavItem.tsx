import Image from "next/image";
import styles from "../../styles/modules/NavItem.module.scss";
type Props = {
  Icon?: Object | string;
  name: string;
  imagePath?: string;
};
export const NavItem: React.FC<Props> = ({ Icon, name, imagePath }) => {
  return (
    <div className={styles.container}>
      <div>{Icon && Icon}</div>
      <div>
        <p>{name ? name : null}</p>
        {imagePath && (
          <div className={styles.image}>
            <Image src={imagePath ? imagePath : "/"} width={80} height={22} />
          </div>
        )}
      </div>
    </div>
  );
};
