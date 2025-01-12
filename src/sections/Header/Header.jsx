import styles from "./HeaderStyles.module.css";
import Hero from "./Hero"

function Header() {
    return(
        <section id="header" className={`text-center row sticky-top bg-dark text-white border-bottom border-2`}>
            <div className={`${styles.navHeader} col-lg-10 col-md ${styles.roundedBottomEnd3} border border-1 border-top-0`}>
                <nav className={`navbar navbar-expand-lg navbar-expand-md row text-center mx-auto`}>
                    <div className={`navbar-brand ${styles.navbarBrand} col-lg-4 col-md-2`}>
                        <span className={`dropdown`}>
                            <Hero/>
                            <span className={`${styles.navbarOwner} border border-1 bg-dark text-white rounded-end-3 px-3 dropdown-toggle`}
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">Alam Rincon
                            </span>
                            {/* <!-- WORKING HERE --> */}
                            <ul className={`dropdown-menu dropdown-menu-end`}>
                                <li><a className={`dropdown-item`} href="#">Github</a></li>
                                <li><hr className={`dropdown-divider`}/></li>
                                <li><a className={`dropdown-item`} href="#">Account Settings</a></li>
                            </ul>
                        </span>
                    </div>
                    <button className={`navbar-toggler ${styles.nav_hw_px} mx-auto`} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon`}></span>
                    </button>
                    {/* <!-- Navigation bar --> */}
                    <div className={`collapse navbar-collapse col-lg-6`} id="navbarSupportedContent">
                        <ul className={`navbar-nav mx-auto`}>
                            <li className={`nav-item`}>
                                <button className={`nav-link ${styles.navLink}`} href="#scrollspyHeading1">About Me</button>
                            </li>
                            <li className={`nav-item`}>
                                <button className={`nav-link ${styles.navLink}`} href="#scrollspyHeading2">Skills</button>
                            </li>
                            <li className={`nav-item`}>
                                <button className={`nav-link ${styles.navLink}`} href="#scrollspyHeading3">Experience</button>
                            </li>
                            <li className={`nav-item`}>
                                <button className={`nav-link ${styles.navLink}`} href="#scrollspyHeading4">Educations</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* <!-- WORKING HERE --> */}
            <div className={`col-lg-2 col-md`}>
                <div className={`scrollspy-example p-3 rounded-2`} data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
                    data-bs-smooth-scroll="true" tabindex="0">
                    <h4 id="scrollspyHeading1">First heading</h4>
                    {/* <!-- <h4 id="scrollspyHeading2">Second heading</h4>
                    <h4 id="scrollspyHeading3">Third heading</h4>
                    <h4 id="scrollspyHeading4">Fourth heading</h4>
                    <h4 id="scrollspyHeading5">Fifth heading</h4> --> */}
                </div>
            </div>
        </section>
    );
}

export default Header;