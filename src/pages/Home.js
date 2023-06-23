import Navbar from "../components/navbar/Navbar";
import Gallery from "../components/gallery/Gallery";
import styles from "../styles/Home.module.css";
import projectsData from "../data";

function Home() {
  return (
    <div>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      <div className={styles["images-list"]}>
        <Gallery projectsData={projectsData} />
      </div>
    </div>
  );
}

export default Home;
