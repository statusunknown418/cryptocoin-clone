import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "../../styles/modules/SubNavItem.module.scss";
type Props = {
  href: string;
  name: string;
};

export const SubNavItem: React.FC<Props> = ({ href, name }) => {
  const router = useRouter();
  return (
    <Link href={`/${href}`}>
      <div className={styles.container}>
        <div
          className={
            router.asPath === `/${href}`
              ? styles.isSelectedRoute
              : styles.notSelected
          }
        >
          <h4>{name}</h4>
        </div>
      </div>
    </Link>
  );
};
