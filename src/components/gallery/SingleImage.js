import React, { useState, useEffect } from "react";
import styles from "../../styles/SingleImage.module.css";

const SingleImage = ({ img, firstImg, alt, title, onLoad, isLoaded }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const image = new Image();
    image.src = img[0];
    image.onload = () => {
      onLoad();
    };
  }, [img, onLoad]);

  return (
    <div
      className={styles["single-image-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLoaded ? (
        <img src={img[0]} alt={alt} className={styles["single-image"]} />
      ) : (
        <div></div>
      )}
      {isHovered && <div className={styles["image-overlay"]}>{title}</div>}
    </div>
  );
};

export default SingleImage;
