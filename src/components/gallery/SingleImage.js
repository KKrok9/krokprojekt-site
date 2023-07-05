import React, { useState } from "react";
import styles from "../../styles/SingleImage.module.css";
import LazyLoad from "react-lazyload";

const SingleImage = ({ img, firstImg, alt, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles["single-image-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LazyLoad once>
        <img src={firstImg} alt={alt} className={styles["single-image"]} />
      </LazyLoad>

      {isHovered && <div className={styles["image-overlay"]}>{title}</div>}
    </div>
  );
};

export default SingleImage;
