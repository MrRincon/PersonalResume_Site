import styles from "./MainContentStyles.module.css";

function Info() {
  const InfoHeaders = ["Education", "Skills", "About Me", "Experience"];
  const InfoArray = [];
  var headingIndex = 1;
  InfoHeaders.forEach((element) => {
    InfoArray.push(<h2>again</h2>);
    headingIndex++;
  });

  return InfoArray;
}
function Information() {
  return (
    <div
      id="content"
      className={`col mx-auto text-center border border-2 border-top-0 ${styles.information}`}
    >
      <div
        className={`col-10 offset-1 my-5 py-2 border-2 rounded-4 ${styles.infoContainer}`}
      >
        <div
          className={`col-8 offset-2 my-2 py-2 border-1 rounded-4 ${styles.infoSecondContainer}`}
        >
          <div
            className={`col-6 offset-3 my-1 py-2 border-1 rounded-4 ${styles.infoThirdContainer}`}
          >
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
