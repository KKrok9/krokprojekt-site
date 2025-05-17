import React from "react";
import styles from "../../styles/Modal.module.css";

const Modal = ({ offer, closeModal }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className={styles["modal-overlay"]} onClick={handleOverlayClick}>
            <div className={styles["modal-container"]}>
                <div className={styles["modal-header"]}>
                    <div className={styles["image-container"]}>
                        <img
                            className={styles["modal-image"]}
                            src={offer.path}
                            alt={offer.title}
                        />
                    </div>
                    <div className={styles["title-container"]}>
                        <p className={styles["modal-para"]}>{offer.title}</p>
                    </div>

                    <div className={styles["button-container"]}>
                        <button
                            className={styles["modal-close-button"]}
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                </div>
                <div className={styles["modal-content"]}>
                    <p className={styles["modal-content-para"]}>{offer.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
