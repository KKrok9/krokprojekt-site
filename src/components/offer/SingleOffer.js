import styles from "../../styles/SingleOffer.module.css";

const SingleOffer = ({ img, alt, title }) => {
  return (
    <div className={styles["single-offer-container"]}>
      <div className={styles["image-container"]}>
        <img className={styles["image"]} src={img} alt={alt} />
      </div>
      <p>{title}</p>
    </div>
  );
};
export default SingleOffer;
