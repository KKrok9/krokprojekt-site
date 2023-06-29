import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Navbar.module.css";
import logo from "../../images/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbarOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["container"]} ref={navbarRef}>
        <div className={styles["logo"]}>
          <img src={logo} alt="logo" className={styles["logo-content"]} />
        </div>
        <div
          className={`${styles["navbar-elements"]} ${
            isNavbarOpen && styles["active"]
          }`}
        >
          <li
            className={`${styles["navbar-element"]} ${
              isNavbarOpen && styles["active"]
            }`}
          >
            <a href="/">PROJEKTY</a>
          </li>
          <li
            className={`${styles["navbar-element"]} ${
              isNavbarOpen && styles["active"]
            }`}
          >
            OFERTA
          </li>
          <li
            className={`${styles["navbar-element"]} ${
              isNavbarOpen && styles["active"]
            }`}
          >
            KONTAKT
          </li>
        </div>
        <div className={styles["navbar-open"]} onClick={toggleNavbarOpen}>
            <MenuIcon></MenuIcon>
        </div>
      </div>
      {isNavbarOpen && (
        <div className={styles["overlay"]} onClick={toggleNavbarOpen}></div>
      )}
    </nav>
  );
};

export default Navbar;
