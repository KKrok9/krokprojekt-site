import React, { useState } from "react";
import styles from "../../styles/OffersGallery.module.css";
import SingleOffer from "./SingleOffer";
import Modal from "./Modal";

const OffersGallery = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const iconsData = props.iconsData;

  const handleOfferClick = (index) => {
    setSelectedOffer(iconsData[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedOffer(null);
  };

  return (
    <div className={styles["gallery-container"]}>
      {iconsData.map((item, index) => {
        return (
          <div
            key={index}
            className={styles["gallery-offer"]}
            onClick={() => handleOfferClick(index)}
          >
            <SingleOffer
              img={item.path}
              alt="item"
              title={item.title}
              description={item.description}
            ></SingleOffer>
          </div>
        );
      })}
      {modalOpen && selectedOffer && (
        <Modal offer={selectedOffer} closeModal={closeModal} />
      )}
    </div>
  );
};

export default OffersGallery;
