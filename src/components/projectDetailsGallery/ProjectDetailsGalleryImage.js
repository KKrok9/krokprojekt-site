import styles from "../../styles/ProjectDetailsGalleryImage.module.css";

const ProjectDetailsGalleryImage = (props) => {
  return (
    <div className={styles["single-image-container"]}>
      <img
        src={props.src}
        alt={props.alt}
        className={styles["single-image"]}
      ></img>
    </div>
  );
};
export default ProjectDetailsGalleryImage;
