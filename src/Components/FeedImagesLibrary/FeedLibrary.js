import React from "react";
import styles from "./FeedLibrary.module.css";
import FeedPhotos from "./FeedPhotos";
const Feed = ({ date }) => {
  const items = date.collection.items.splice(0, 20);
  const itemsFilter = items.filter((item) => {
    return item["links"];
  });
  return (
    <div className={styles.feed}>
      <FeedPhotos items={itemsFilter} />
    </div>
  );
};

export default Feed;
