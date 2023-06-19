import styles from "./styles/App.module.css";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div className={styles["app"]}>
      <div className={styles["navbar"]}>
        <Navbar></Navbar>
      </div>
      <div className={styles["images-list"]}>
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default App;
