import React from "react";
import styles from "../../styles/Astronomy-day.module.css";
import Feed from "../../src/Components/Feed";

const AstronomyDay = ({ data_Astronomy_day }) => {
  console.log(data_Astronomy_day);
  return (
    <div>
      {data_Astronomy_day && (
        <Feed
          data={data_Astronomy_day}
          img={data_Astronomy_day.hdurl}
          descri={data_Astronomy_day.explanation}
          dataPost={data_Astronomy_day.date}
        />
      )}
    </div>
  );
};

export default AstronomyDay;
