import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GitHub } from "../../assets/icons/Github";
import { loginGithub } from "../../firebase/client";
import styles from "../../styles/modules/MainNavbar.module.scss";
import { Searchbar } from "../searchingNav/Searchbar";
import { ReusableItem } from "./ReusableItem";

export const MainNavbar: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);
  const handleClick = () => {
    loginGithub()
      .then((user) => {
        const { additionalUserInfo } = user;
        const { username } = additionalUserInfo;
        console.log(user);
        setModal(false);
        setUser(additionalUserInfo);
        console.log(username);
      })
      .catch((err) => console.log(err));
  };
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a className={styles.firstDiv}>
          <div />
          coinpaprika
        </a>
      </Link>
      <ReusableItem name="Our App" imagePath="/ourCoin.svg" />
      <ReusableItem name="Add Coin/Exchange/ICO" />
      <ReusableItem name="Newsletter" />
      <ReusableItem name="" Icon="&#x263C;" />
      {user === null ? (
        <button
          className={styles.signInOut}
          onClick={() => {
            setModal(true);
          }}
        >
          <div>
            <h3>Login / Sign Up</h3>
          </div>
        </button>
      ) : (
        <div className={styles.userInfo}>
          <Image
            height={15}
            width={15}
            src={user.profile.avatar_url}
            alt={user.username}
          />
          <h3>{user.username}</h3>
          <span>&#x25BC;</span>
        </div>
      )}
      <Searchbar />

      {/* Modal for auth */}
      {modal && (
        <div className={styles.darken}>
          <div className={styles.modal}>
            <header>
              <span
                onClick={() => {
                  setModal(false);
                }}
              >
                &#9587;
              </span>
            </header>
            <h2>Login</h2>
            <button onClick={handleClick}>
              <GitHub width={20} height={20} fill="#ffff" />
              Login With Github{" "}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
