import styles from "./styles/App.module.css";
import Navbar from "./components/navbar/Navbar";
import Background from "./components/background/Background";

function App() {
  return (
    <div className={styles["app"]}>
      <div className={styles["section--1"]}>
        <div className={styles["navbar"]}>
          <Navbar></Navbar>
        </div>
        <div className={styles["background"]}>
        <Background></Background>
        </div>
        
      </div>
    </div>
  );
}

export default App;
