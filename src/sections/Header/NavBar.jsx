import styles from "./HeaderStyles.module.css";
import Account from "./Account";

function Items() {
  const NavInfo = ["Education", "Skills", "About Me", "Experience"];
  const Items = [];
  var headingIndex = 1;
  NavInfo.forEach((element) => {
    Items.push(
      <li className={`nav-item`} key={`nav-item-${headingIndex}`}>
        <button
          className={`nav-link ${styles.navLink}`}
          href={`#scrollspyHeading${headingIndex}`}
        >
          {element}
        </button>
      </li>
    );
    headingIndex++;
  });

  return Items;
}

function NavItems() {
  return (
    <div
      className={`scrollspy-example text-center collapse navbar-collapse col-xl-6 ${styles.info}`}
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      id="navbarSupportedContent"
      data-bs-smooth-scroll="true"
      tabIndex="0"
    >
      <ul
        className={`navbar-nav mx-auto d-flex flex-column flex-md-row justify-content-md-center align-items-md-center`}
      >
        <Items />
      </ul>
    </div>
  );
}

function NavBar() {
  return (
    <div
      className={`col-xl-10 col-lg-12 col-md-12 border border-1 border-top-0 ${styles.navHeader}`}
    >
      <nav
        className={`navbar navbar-expand-xl navbar-expand-lg row text-center mx-auto`}
      >
        <Account />
        <button
          className={`navbar-toggler mx-auto my-2 ${styles.navToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <h4>HOME</h4>
        </button>
        <NavItems />
      </nav>
    </div>
  );
}

export default NavBar;
