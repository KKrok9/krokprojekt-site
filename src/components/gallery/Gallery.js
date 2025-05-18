import React, { Suspense, useEffect, useState } from "react";
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

    const handleLinkClick = () => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    // Scroll to saved position after 0.5s
    useEffect(() => {
        const savedScroll = sessionStorage.getItem("scrollPosition");
        if (savedScroll) {
            setTimeout(() => {
                window.scrollTo({ top: parseInt(savedScroll, 10), behavior: "smooth" });
            }, 300);
        }
    }, []);

    return (
        <div className={styles["gallery-container"]}>
            {projectsData.map((item, index) => (
                <div key={index} className={styles["gallery-pic"]}>
                    <Link to={`/project/${item.title}`} onClick={handleLinkClick}>
                        <Suspense fallback={<div></div>}>
                            <LazyLoad once>
                                <SingleImage
                                    img={item.images}
                                    firstImg={item.images[0]}
                                    alt={item.title}
                                    title={item.title}
                                    onLoad={() => handleImageLoad(index)}
                                    isLoaded={loadedImages.includes(index)}
                                />
                            </LazyLoad>
                        </Suspense>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
