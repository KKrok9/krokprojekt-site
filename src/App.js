import styles from "./styles/App.module.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import Footer from "./components/footer/Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

// 🔁 Nowy wewnętrzny komponent, gdzie można użyć useLocation
function AppContent() {
    const location = useLocation();
    const hideFooter = location.pathname.startsWith("/project/");

    return (
        <div className={styles["app"]}>
            <Routes>
                <Route path="/projects" element={<Home />} />
                <Route path="/project/:id" element={<Details />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Welcome />} />
            </Routes>
            {!hideFooter && <Footer />}
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
