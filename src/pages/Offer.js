import styles from "../styles/Offer.module.css";
import Navbar from "../components/navbar/Navbar";
import OffersGallery from "../components/offer/OffersGallery";
import { iconsData } from "../data";

const Offer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      
      <div className={styles["offers-list"]}>
        <OffersGallery iconsData={iconsData} />
      </div>
    </div>
  );
};
export default Offer;
