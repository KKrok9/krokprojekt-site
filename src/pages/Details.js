import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Details.module.css";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";
import ProjectDetailsGallery from "../components/projectDetailsGallery/ProjectDetailsGallery";

const Details = () => {
  const { id } = useParams();
  const selectedItem = projectsData.find((item) => item.title === id);

  return (
    <div className={styles["container"]}>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      <div className={styles["details-container"]}>
        <div className={styles["description-container"]}>
          <h1>{selectedItem.title}</h1>
        </div>
        <div className={styles["photos-container"]}>
          <ProjectDetailsGallery src={selectedItem}></ProjectDetailsGallery>
        </div>
      </div>
    </div>
  );
};
export default Details;
