import SingleImage from "./SingleImage";
import styles from "../../styles/Gallery.module.css";
import { Link } from "react-router-dom";

const Gallery = (props) => {
  const projectsData = props.projectsData;

  return (
    <div className={styles["gallery-container"]}>
      {projectsData.map((item, index) => {
        return (
          <div key={index}  className={styles["gallery-pic"]}>
            <Link to={`/project/${item.title}`}>
              <SingleImage
                img={item.images}
                firstImg={item.images[0]}
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
