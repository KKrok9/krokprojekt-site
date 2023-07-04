import styles from "../../styles/ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.para}>ZAPRASZAMY DO KONTAKTU</p>
      </div>

      <div className={styles.logo}>
        <img src="./logo.jpg" alt="logo" className={styles.logo}></img>
      </div>

      <div className={styles.owner}>
        <p className={styles.para}>BIURO PROJEKTOWE</p>
        <br></br>
        <p className={styles.para}>ARCHITEKT MARIUSZ KROK</p>
      </div>

      <div className={styles.phone}>
        <p className={styles.para}>TELEFON: 733996580 </p>
      </div>

      <div className={styles.email}>
        <p className={styles.para}>E-MAIL: biuro@krokprojekt.pl</p>
      </div>

      <div className={styles.linkedin}>
        <p className={styles.para}>
          <a
            href="https://www.linkedin.com/in/mariuszkrok/"
            className={styles.link}
          >
            LINKEDIN : https://www.linkedin.com/in/mariuszkrok/
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactContainer;
