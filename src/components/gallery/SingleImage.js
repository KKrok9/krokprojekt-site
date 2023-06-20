import React, { useState } from 'react';
import styles from '../../styles/SingleImage.module.css';

const SingleImage = ({ img, alt, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles['single-image-container']}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt={alt} className={styles['single-image']} />
      {isHovered && <div className={styles['image-overlay']}>{title}</div>}
    </div>
  );
};

export default SingleImage;
