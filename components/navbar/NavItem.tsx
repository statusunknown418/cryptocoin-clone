import styles from "../../styles/modules/NavItem.module.scss";
type Props = {
  Icon?: Object;
  name: string;
};

export const NavItem: React.FC<Props> = ({ Icon, name }) => {
  return (
    <div className={styles.container}>
      <p>{name ? name : null}</p>
      <div>{Icon}</div>
    </div>
  );
};
