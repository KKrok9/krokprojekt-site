// src/components/Footer.jsx
import styles from "../../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.left_side}>
                    <img
                        src="/logo.jpg"
                        alt="Logo KROKPROJEKT - Architekt Mariusz Krok"
                        className={styles.logo}
                    />
                </div>
                <div className={styles.right_side}>
                    <p>
                        Architekt Mariusz Krok - biuro projektowe.
                        Projekty domów jednorodzinnych, domy modułowe, projekty indywidualne domów,
                        nowoczesna architektura w Polsce.
                    </p>
                </div>

            </div>
            <p className={styles.bottom}>
                © {new Date().getFullYear()} KROKPROJEKT – Architekt Mariusz Krok. Wszystkie prawa zastrzeżone.
            </p>
        </footer>
    );
}

export default Footer;
