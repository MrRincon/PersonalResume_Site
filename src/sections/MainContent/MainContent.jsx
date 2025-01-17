import styles from "./MainContentStyles.module.css";

function MainContent(){
    return(
        <section id="mainContent" className={`row text-white bg-dark`}>
            <div className={`col-lg-3 border-3 border-end`}>
                Hello
            </div>
            <div id="content" className={`col ${styles.main}`}>
                again
            </div>
        </section>
    );
}

export default MainContent;