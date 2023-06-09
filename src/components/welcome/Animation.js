import React, { useCallback, useEffect, useRef } from "react";
import styles from "../../styles/Animation.module.css";

const Animation = () => {
  const videoRef = useRef(null);
  const animationWrapperRef = useRef(null);

  const handleResize = useCallback(() => {
    const video = videoRef.current;
    const animationWrapper = animationWrapperRef.current;

    const { offsetWidth, offsetHeight } = animationWrapper;
    const { videoWidth, videoHeight } = video;

    const scale = Math.max(
      offsetWidth / videoWidth,
      offsetHeight / videoHeight
    );
    const scaledWidth = videoWidth * scale;
    const scaledHeight = videoHeight * scale;

    video.style.width = scaledWidth + "px";
    video.style.height = scaledHeight + "px";
    video.style.left = (offsetWidth - scaledWidth) / 2 + "px";
    video.style.top = (offsetHeight - scaledHeight) / 2 + "px";
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const animationWrapper = animationWrapperRef.current;
    const handleLoadedMetadata = () => {
      handleResize();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const observer = new ResizeObserver(handleResize);
    observer.observe(animationWrapper);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      observer.unobserve(animationWrapper);
    };
  }, [handleResize]);

  return (
    <div className={styles.animationWrapper} ref={animationWrapperRef}>
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className={styles.animationPlayer}
        ref={videoRef}
        playsInline
        poster="/strona-www/2_REZYDENCJA W TANZANII/1.jpg"
      >
        <source src="/animations/28-lower.mp4" type="video/mp4" />
      </video>
      <div className={styles.imageContainer}>
        <img src="/logo-white.png" alt="Logo" className={styles.centeredLogo} />
      </div>
    </div>
  );
};

export default Animation;
