import { useRouter } from "next/dist/client/router";
import { Searchbar } from "../../components/searchingNav/Searchbar";
import styles from "../../styles/pages/Portfolio.module.scss";
const index = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Portfolio</h2>
        <p>
          The portfolio tool helps you track your assets and gives you a broader
          look at your funds. Our tool is the easiest way to find, track, and
          manage your crypto investments.
        </p>
      </div>
      <div className={styles.card}>
        <p>
          Become a part of community. By creating your very first portfolio,
          you&apos;ll join hundreds of other users. Build your very own
          portfolio &and; compare it with other people.
        </p>
        <button>Create Your Portfolio</button>
      </div>
      <nav className={styles.portfoliosList}>
        <ul>
          <li>
            <h3>Public Portfolios</h3>
          </li>
        </ul>
      </nav>
      <ul className={styles.searchBar}>
        <li>
          <label> Search</label>
          <input type="text" />
        </li>
      </ul>
    </section>
  );
};

export default index;
