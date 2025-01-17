import styles from "./MainContentStyles.module.css";
import Projects from "./Projects";
import Information from "./Information";

function MainContent() {
  return (
    <section
      id="mainContent"
      className={`row ${styles.main}`}
    >
      <Projects />
      <Information />
    </section>
  );
}

export default MainContent;
