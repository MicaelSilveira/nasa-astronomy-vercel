import React from "react";
import styles from "./FeedPage.module.css";
const FeedPage = () => {
  return (
    <div className={styles.feedPage}>
      <div className={styles.next}>
        <button>Next</button>
      </div>
      <div className={styles.previous}>
        <button>Previous</button>
      </div>
    </div>
  );
};

export default FeedPage;
