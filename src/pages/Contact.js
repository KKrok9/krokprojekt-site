import styles from "../styles/Contact.module.css";
import Navbar from "../components/navbar/Navbar";
import ContactContainer from "../components/contact/ContactContainer";
const Contact = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["navbar"]}>
                <Navbar />
            </div>
            <div className={styles["contact-container"]}>
                <ContactContainer></ContactContainer>
            </div>
        </div>
    );
};
export default Contact;
