import React from "react";
import { API_IMAGES_LIBRARY_PAGE } from "../../src/api";
import useFetch from "../../src/Hooks/useFetch";
import FeedLibrary from "../../src/Components/FeedImagesLibrary/FeedLibrary";
import Loading from "../../src/Loading";
import Head from "next/head";
const ImageHome = () => {
  const [pageStats, setPageStats] = React.useState(44);
  const { request, dataFetch, loadingFetch } = useFetch();
  React.useEffect(() => {
    async function requestFetch() {
      await request(`${API_IMAGES_LIBRARY_PAGE}${pageStats}`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    requestFetch();
  }, [pageStats]);
  return (
    <div>
      <Head>
        <title>Nasa | Images</title>
      </Head>
      {loadingFetch && <Loading />}
      {dataFetch && (
        <FeedLibrary setPageStats={setPageStats} date={dataFetch} />
      )}
    </div>
  );
};

export default ImageHome;
