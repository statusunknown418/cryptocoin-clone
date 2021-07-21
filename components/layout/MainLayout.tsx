import styles from "../../styles/modules/MainLayout.module.scss";
import { MainFooter } from "../footer/MainFooter";
import { MainNavbar } from "../navbar/MainNavbar";
import { MainSubNav } from "../subnavbar/MainSubNav";
type Props = {};

export const MainLayout: React.FC<Props> = ({ children }) => {
  // const wrapper: CSSProperties = {
  //   display: "flex",
  //   flexDirection: "column",

  //   margin: "1rem 20rem 1rem 20rem",
  // };

  // TODO fix media queries for UI
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
