import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/modules/ReusableItem.module.scss";
type Props = {
  Icon?: Object | string;
  name: string;
  imagePath?: string;
  ref?: string;
};
export const ReusableItem: React.FC<Props> = ({
  Icon,
  name,
  imagePath,
  ref,
}) => {
  return (
    <div className={styles.container}>
      <Link passHref href={`/${ref}`}>
        <div>
          <div>{Icon && Icon}</div>
          <div>
            <p>{name ? name : null}</p>
            {imagePath && (
              <div className={styles.image}>
                <Image
                  src={imagePath ? imagePath : "/"}
                  width={80}
                  height={22}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
