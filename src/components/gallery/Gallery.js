import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Gallery.module.css";
import LazyLoad from "react-lazyload";

const SingleImage = React.lazy(() => import("./SingleImage"));

const Gallery = (props) => {
  const projectsData = props.projectsData;
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
  };

  return (
    <div className={styles["gallery-container"]}>
      {projectsData.map((item, index) => {
        return (
          <div key={index} className={styles["gallery-pic"]}>
            <Link to={`/project/${item.title}`}>
              <Suspense fallback={<div></div>}>
                <LazyLoad once>
                  <SingleImage
                    img={item.images}
                    firstImg={item.images[0]}
                    alt="item"
                    title={item.title}
                    onLoad={() => handleImageLoad(index)}
                    isLoaded={loadedImages.includes(index)}
                  />
                </LazyLoad>
              </Suspense>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
