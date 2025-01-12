import styles from "./MainContentStyles.module.css";

function MainContent(){
    return(
        <section id="mainContent" className={`row bg-dark text-white`}>
            <div className={`col-lg-3`}>
                Hello
            </div>
            <div className={`col`}>
                again
            </div>
        </section>
    );
}

export default MainContent;