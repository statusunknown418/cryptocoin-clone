import { CSSProperties } from "react";
import { MainFooter } from "../footer/MainFooter";
import { MainNavbar } from "../navbar/MainNavbar";
import { MainSubNav } from "../subnavbar/MainSubNav";

type Props = {};

export const MainLayout: React.FC<Props> = ({ children }) => {
  const wrapper: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
  };
  return (
    <>
      <header style={wrapper}>
        <MainNavbar />
        <MainSubNav />
      </header>

      <div style={wrapper}>{children}</div>

      <footer style={wrapper}>
        <MainFooter />
      </footer>
    </>
  );
};
