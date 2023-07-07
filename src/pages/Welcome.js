import React from "react";
import styles from "../styles/Welcome.module.css";
import Navbar from "../components/navbar/Navbar";
import Animation from "../components/welcome/Animation";

const Welcome = () => {
  return (
    <div className={`${styles.container} ${styles["full-height"]}`}>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      <div className={styles["video-container"]}>
        <Animation></Animation>
      </div>
    </div>
  );
};

export default Welcome;
