import styles from "./HeaderStyles.module.css";
import NavBar from "./NavBar";
import Social from "./Social";

function Header() {
  return (
    <section
      id="header"
      className={`text-center row sticky-top border-bottom border-2 ${styles.header}`}
    >
      <NavBar />
      <Social />
    </section>
  );
}

export default Header;
