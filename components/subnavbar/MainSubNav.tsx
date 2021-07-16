import { ReusableItem } from "../navbar/ReusableItem";
import { SubNavItem } from "./SubNavItem";

type Props = {};

export const MainSubNav: React.FC<Props> = () => {
  return (
    <div>
      <SubNavItem name="Market Overview" href="market" />
      <SubNavItem name="Currencies" href="" />
    </div>
  );
};
