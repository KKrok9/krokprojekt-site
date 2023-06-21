import React from "react";
import styles from "../../styles/Navbar.module.css";
import logo from "../../images/logo.jpg";

const Navbar = () => {

  return (
    <div className={styles["container"]}>
      <div className={styles["logo"]}>
        <img
          src={logo}
          alt="logo"
          className={styles["logo-content"]}
        />
      </div>
      <nav className={styles["navbar"]}>
        <li className={styles["navbar-element"]}>PROJEKTY</li>
        <li className={styles["navbar-element"]}>OFERTA</li>
        <li className={styles["navbar-element"]}>KONTAKT</li>
      </nav>
    </div>
  );
};

export default Navbar;
