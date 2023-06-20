import Navbar from "../components/navbar/Navbar";
import Gallery from "../components/gallery/Gallery";
import styles from "../styles/Home.module.css";
function Home() {
  return (
    <div>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      <div className={styles["images-list"]}>
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
