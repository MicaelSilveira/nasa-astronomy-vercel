import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Feed from "../src/Components/Feed";
// export async function getServerSideProps() {
//   const response = await fetch(API_ASTRONOMY_DAY);
//   const data = await response.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// }
const Home = ({ data_Astronomy_day }) => {
  return (
    <div>
      <Head>
        <title>DESENVOLVIMENTO</title>
      </Head>
      <div>
        <Link href="/infor-today/Astronomy-day">
          <a className={styles.today}>
            <h3>Today</h3>
          </a>
        </Link>
      </div>
      {data_Astronomy_day && (
        <Feed
          data={data_Astronomy_day}
          today={true}
          img={data_Astronomy_day.url}
          descri={false}
          dataPost={false}
        />
      )}
    </div>
  );
};
export default Home;
