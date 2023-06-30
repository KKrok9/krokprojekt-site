import styles from "../../styles/SingleOffer.module.css";

const SingleOffer = ({img,alt,title}) => {
  return (
    <div className={styles["single-offer-container"]}>
      <p>{title}</p>
      <img className={styles["single-offer"]} src={img} alt={alt} />
    </div>
  );
};
export default SingleOffer;
