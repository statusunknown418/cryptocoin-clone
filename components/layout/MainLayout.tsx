import styles from "../../styles/modules/MainLayout.module.scss";
import { MainFooter } from "../footer/MainFooter";
import { MainNavbar } from "../navbar/MainNavbar";
import { MainSubNav } from "../subnavbar/MainSubNav";
type Props = {};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header className={styles.wrapper}>
        <MainNavbar />
        <MainSubNav />
      </header>

      <div className={styles.wrapper}>{children}</div>

      <footer className={styles.wrapper}>
        <MainFooter />
      </footer>
    </>
  );
};
