import styles from "./HeaderStyles.module.css";
import myHeroImg from "../../assets/myHero.png";
// import themeIcon from "../../assets/sun.svg";
function Hero() {
  return (
    // <section id="hero" className={styles.container}>
    //   <div className={styles.colorModeContainer}>
        <img
          className={`${styles.hw_px} img-fluid hw-px rounded-circle border border-1 ${styles.marginEndN15}`}
          src={myHeroImg}
          alt="Profile Picture"
        />
    //     <img
    //       className={styles.colorMode}
    //       src={themeIcon}
    //       alt="Color Mode Icon"
    //     />
    //   </div>
    // </section>
  );
}

export default Hero;
