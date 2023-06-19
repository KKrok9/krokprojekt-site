import styles from "../../styles/SingleImage.module.css";

const SingleImage = (props) => {
  return <img src={props.img} alt={props.alt} className={styles["single-image"]} />;
};
export default SingleImage;
