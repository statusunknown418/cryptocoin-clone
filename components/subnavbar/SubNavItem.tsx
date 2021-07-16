import styles from "../../styles/modules/SubNavbarItem.module.scss";
import Link from "next/link";
import { useState } from "react";

type Props = {
  href: string;
  name: string;
};

export const SubNavItem: React.FC<Props> = ({ href, name }) => {
  const [border, setBorder] = useState("default");

  return (
    <Link href={`/${href}`}>
      <div className={styles.container}>
        <h4>{name}</h4>
      </div>
    </Link>
  );
};
