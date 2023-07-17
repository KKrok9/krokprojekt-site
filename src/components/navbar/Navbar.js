import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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
          <Link to="/" className={styles["logo-link"]}>
            <img
              src="/logo.jpg"
              alt=""
              className={styles["logo-content"]}
            ></img>
          </Link>
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
            <a href="/">STRONA GŁÓWNA</a>
          </li>
          <li
            className={`${styles["navbar-element"]} ${
              isNavbarOpen && styles["active"]
            }`}
          >
            <a href="/projects">PROJEKTY</a>
          </li>
          <li
            className={`${styles["navbar-element"]} ${
              isNavbarOpen && styles["active"]
            }`}
          >
            <a href="/offer">OFERTA</a>
          </li>
          <li
            className={`${styles["navbar-element"]} ${
              isNavbarOpen && styles["active"]
            }`}
          >
            <a href="/contact">KONTAKT</a>
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
