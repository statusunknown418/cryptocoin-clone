import styles from "../../styles/modules/searchbar.module.scss";
type Props = {};
// TODO finish the searchBar
export const Searchbar: React.FC<Props> = () => {
  return (
    <form className={styles.container}>
      <input type="text" placeholder="Search in coinpaprika clone" />

      <i></i>
    </form>
  );
};
