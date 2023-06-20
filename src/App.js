import styles from "./styles/App.module.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className={styles["app"]}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Details></Details>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
