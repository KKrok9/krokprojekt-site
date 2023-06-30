import styles from "../../styles/OffersGallery.module.css";
import SingleOffer from "./SingleOffer";
const OffersGallery = (props) => {
  const iconsData = props.iconsData;
  return (
    <div className={styles["gallery-container"]}>
      {iconsData.map((item, index) => {
        return (
          <div key={index} className={styles["gallery-offer"]}>
            <SingleOffer
              img={item.path}
              alt="item"
              title={item.title}
            ></SingleOffer>
          </div>
        );
      })}
    </div>
  );
};
export default OffersGallery;
