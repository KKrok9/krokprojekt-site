import SingleImage from "./SingleImage";
import styles from "../../styles/Gallery.module.css";
import { Link } from "react-router-dom";
import projectsData from "../../data";

const Gallery = () => {
  return (
    <div className={styles["gallery-container"]}>
      {projectsData.map((item, index) => {
        return (
          <div className={styles["gallery-pic"]}>
            <Link to={`/project/${item.title}`}>
              <SingleImage
                img={item.images}
                firstImg={item.images[0]}
                key={index}
                alt="item"
                title={item.title}
              ></SingleImage>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
