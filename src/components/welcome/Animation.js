import React, { useLayoutEffect, useRef } from "react";
import styles from "../../styles/Animation.module.css";

const Animation = () => {
  const videoRef = useRef(null);
  const animationWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    const animationWrapper = animationWrapperRef.current;

    const handleResize = () => {
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
    };

    handleResize();

    const observer = new ResizeObserver(handleResize);
    observer.observe(animationWrapper);

    return () => {
      observer.unobserve(animationWrapper);
    };
  }, []);

  return (
    <div className={styles.animationWrapper} ref={animationWrapperRef}>
      <video
        autoPlay
        muted
        loop
        preload
        className={styles.animationPlayer}
        ref={videoRef}
      >
        <source src="/background-animation-1.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje odtwarzania wideo.
      </video>
    </div>
  );
};

export default Animation;
