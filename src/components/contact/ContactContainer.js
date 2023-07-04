import styles from "../../styles/ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.header}>ZAPRASZAMY DO KONTAKTU</h1>
      </div>

      <div className={styles.logo}>
        <img src="./logo.jpg" alt="logo" className={styles.logo}></img>
      </div>

      <div className={styles.owner}>
        <p>BIURO PROJEKTOWE</p>
        <br></br>
        <p>ARCHITEKT MARIUSZ KROK</p>
      </div>

      <div className={styles.phone}>
        <p>TELEFON: 733996580 </p>
      </div>

      <div className={styles.email}>
        <p>E-MAIL: biuro@krokprojekt.pl</p>
      </div>

      <div className={styles.linkedin}>
        <p>
        
          <a
            href="https://www.linkedin.com/in/mariuszkrok/"
            className={styles.link}
          >LINKEDIN : https://www.linkedin.com/in/mariuszkrok/
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactContainer;
