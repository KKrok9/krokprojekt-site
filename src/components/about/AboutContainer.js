import React from "react";
import styles from "../../styles/AboutContainer.module.css";

const AboutContainer = () => {
    return (
        <div className={styles["about-container"]}>
            <div className={styles["text-section"]}>
                <h2>O mnie</h2>
                <p>
                    Nazywam się Mariusz Krok i jestem Architektem z pasją do tworzenia przestrzeni, które łączą estetykę, funkcjonalność i indywidualne potrzeby inwestora. W mojej pracy najważniejsze jest zrozumienie człowieka i kontekstu, w jakim powstaje projekt.
                </p>
                <p>
                    Specjalizuję się w projektach indywidualnych – czyli wymarzonych przestrzeniach do życia, zaprojektowanych z myślą o konkretnej osobie, rodzinie, stylu życia. Każdy projekt to dla mnie nowa historia i nowe wyzwanie, dlatego do każdego podchodzę indywidualnie, z pełnym zaangażowaniem i dbałością o detale.
                </p>
                <p>
                    Działam na terenie całej Polski, oferując kompleksową obsługę projektową. Przeprowadzę Cię przez proces budowlany – od koncepcji, przez uzyskanie pozwolenia na budowę, aż po realizację Twojego wymarzonego domu. Dbam o to, by wszystkie etapy projektu jak i budowy były dla Ciebie zrozumiałe, uporządkowane i spokojne.
                </p>
                <p>
                    Mam za sobą wiele lat doświadczenia w projektowaniu, a moją inspiracją są prostota, funkcjonalność, naturalne materiały i nowoczesne rozwiązania, które sprawiają, że przestrzeń staje się ponadczasowa.
                </p>
                <p>
                    Jeśli szukasz architekta, który połączy profesjonalizm z kreatywnością i pełnym zaangażowaniem, zapraszam do kontaktu – chętnie porozmawiam o Twoim pomyśle.
                </p>
            </div>
            <div className={styles["image-section"]}>
                <img src="/mariusz.jpg" alt="Mariusz Krok" />
            </div>
        </div>
    );
};

export default AboutContainer;
