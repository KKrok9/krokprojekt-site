import styles from "../styles/About.module.css";
import Navbar from "../components/navbar/Navbar";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles["about-container"]}>
                <div className={styles["text-section"]}>
                    <h2>O mnie</h2>
                    <div className={styles["text-div"]}>
                        Nazywam się Mariusz Krok i jestem Architektem z pasją do tworzenia przestrzeni, które łączą estetykę, funkcjonalność i indywidualne potrzeby inwestora. W mojej pracy najważniejsze jest zrozumienie człowieka i kontekstu, w jakim powstaje projekt.<br /><br />
                        Specjalizuję się w projektach indywidualnych – czyli wymarzonych przestrzeniach, zaprojektowanych z myślą o konkretnej osobie, rodzinie, stylu życia. Każdy projekt to dla mnie nowa historia i nowe wyzwanie, dlatego do każdego podchodzę indywidualnie, z pełnym zaangażowaniem i dbałością o detale.<br /><br />
                        Działam na terenie całej Polski, oferując kompleksową obsługę projektową. Przeprowadzę Cię przez proces budowlany – od koncepcji, przez uzyskanie pozwolenia na budowę, aż po realizację Twojego wymarzonego domu. Dbam o to, by wszystkie etapy projektu jak i budowy były dla Ciebie zrozumiałe, uporządkowane i spokojne.<br /><br />
                        Mam za sobą wiele lat doświadczenia w projektowaniu, a moją inspiracją są prostota, funkcjonalność, naturalne materiały i nowoczesne rozwiązania, które sprawiają, że przestrzeń staje się ponadczasowa.<br /><br />
                        Jeśli szukasz architekta, który połączy profesjonalizm z kreatywnością i pełnym zaangażowaniem, zapraszam do kontaktu – chętnie porozmawiam o Twoim pomyśle.
                    </div>
                </div>
                <div className={styles["image-section"]}>
                    <img onContextMenu={(e) => e.preventDefault()} src="/mariusz.jpg" alt="Mariusz Krok" />
                </div>
            </div>
        </div>
    );
};

export default About;
