import styles from "./Feed.module.css";
const Feed = ({ data, img, descri, dataPost }) => {
  return (
    <div className={`${styles.feed}`}>
      <div className={`${styles.content} animeLeft`}>
        <div className={styles.title}>
          <h1>{data.title}</h1>
        </div>
        {data.media_type === "video" && (
          <div className={styles.video}>
            <iframe
              width="100%"
              height="350"
              src={data.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {data.media_type === "image" && (
          <div className={styles.img}>
            <img src={img} />
          </div>
        )}
        {dataPost && (
          <div className={styles.data}>
            <h3>Date: {dataPost}</h3>
          </div>
        )}
        {descri && (
          <div className={styles.descri}>
            <p>{descri}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
