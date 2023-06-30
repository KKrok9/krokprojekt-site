  import styles from "./styles/App.module.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className={styles["app"]}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Details></Details>} />
          <Route path="/offer" element={<Offer></Offer>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
