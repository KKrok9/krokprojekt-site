import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Details.module.css";
import { useParams } from "react-router-dom";
import itemData from "../utils/data";

const Details = () => {
  const { id } = useParams();
  const selectedItem = itemData.find((item) => item.title === id);

  if (!selectedItem) {
    return <div>Nie znaleziono danych dla tego kwiatka</div>;
  }

  return (
    <div>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      <div className={styles["details-container"]}>
        <h1>{selectedItem.title}</h1>
        <p>{selectedItem.description}</p>
      </div>
    </div>
  );
};
export default Details;
