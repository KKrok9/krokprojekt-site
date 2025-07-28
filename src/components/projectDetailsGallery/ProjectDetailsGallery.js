import React, { useState, useRef, lazy, Suspense, useEffect } from "react";
import styles from "../../styles/ProjectDetailsGallery.module.css";

const ProjectDetailsGalleryImage = lazy(() =>
    import("./ProjectDetailsGalleryImage")
);

const ProjectDetailsGallery = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalRef = useRef(null);

    const openModalHandler = (imageSrc, index) => {
        setIsModalOpen(true);
        setCurrentImageIndex(index);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const handleImageClick = (event) => {
        event.stopPropagation();
    };

    const handleArrowClick = (event) => {
        event.stopPropagation();
        if (event.target.className === styles["modal-previous-button"]) {
            goToPreviousImage();
        } else if (event.target.className === styles["modal-next-button"]) {
            goToNextImage();
        }
    };

    const fullProjectData = props.src.images;
    const projectData = [...fullProjectData];
    projectData.splice(0, 1);

    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const goToNextImage = () => {
        if (currentImageIndex < projectData.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className={styles.container}>
            {isModalOpen && (
                <div
                    className={styles.modal}
                    onClick={closeModalHandler}
                    ref={modalRef}
                >
                    <img
                        src={projectData[currentImageIndex]}
                        className={styles["modal-image"]}
                        alt="modal"
                        onClick={handleImageClick}
                        onContextMenu={(e) => e.preventDefault()}
                    />
                    <button
                        className={styles["modal-close-button"]}
                        onClick={closeModalHandler}
                    >
                        X
                    </button>
                    <button
                        className={styles["modal-previous-button"]}
                        onClick={handleArrowClick}
                    >
                        &lt;
                    </button>
                    <button
                        className={styles["modal-next-button"]}
                        onClick={handleArrowClick}
                    >
                        &gt;
                    </button>
                    <div className={styles["indicator-container"]}>
                        {projectData.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.indicator} ${index === currentImageIndex ? styles["active-indicator"] : ""
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            )}

            {projectData.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={styles["image-div"]}
                        onClick={() => openModalHandler(item, index)}
                    >
                        <Suspense fallback={<div></div>}>
                            <ProjectDetailsGalleryImage src={item} alt="item" />
                        </Suspense>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectDetailsGallery;
