import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/modules/MainNavbar.module.scss";
import { Searchbar } from "../searchingNav/Searchbar";
import { ReusableItem } from "./ReusableItem";

export const MainNavbar: React.FC = () => {
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

      <div className={styles.signInOut}>
        <Link href={"/api/auth/login"}>
          <a>Sign in/Sign up </a>
        </Link>
        <div>
          <Link href={"api/auth/logout"}>
            <a>Logout</a>
          </Link>
        </div>
      </div>
      <Searchbar />

      {/* Modal for user auth
      {modal && (
        <div className={styles.modal}>
          <header>&#10539;</header>
          <h3>Login</h3>
          <div></div>
        </div>
      )} */}
    </nav>
  );
};
