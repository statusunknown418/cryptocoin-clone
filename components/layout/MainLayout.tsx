import { MainFooter } from "../footer/MainFooter";
import { MainNavbar } from "../navbar/MainNavbar";
import { MainSubNav } from "../subnavbar/MainSubNav";

type Props = {};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <MainNavbar />
        <MainSubNav />
      </header>

      {children}

      <footer>
        <MainFooter />
      </footer>
    </>
  );
};
