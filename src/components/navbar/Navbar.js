import React from "react";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles["container"]}>
    <div className={styles["logo"]}>
        LOGO FIRMY
    </div>
      <nav className={styles["navbar"]}>
        <li className={styles["navbar-element"]}>O MNIE</li>
        <li className={styles["navbar-element"]}>MOJE PROJEKTY</li>
        <li className={styles["navbar-element"]}>USŁUGI</li>
        <li className={styles["navbar-element"]}>KONTAKT</li>
      </nav>
    </div>
  );
};

export default Navbar;
