import React, { useEffect, useState } from "react";
import styles from "./mindFull.module.css";

const MindFull = () => {
  const [data, setData] = useState([]);
  function getData() {
    fetch("https://starter-express-api-nine.vercel.app/mind/full")
      .then((r) => r.json())
      .then((r) => (r ? setData(r) : setData([])));
  }
  useEffect(() => getData(), []);

  return (
    <div className={styles.mindFull}>
      <h1>Mindfulness Library</h1>
      <h3> Access our pre-recorded meditation sessions, at your convenience</h3>
      <div className={styles.mindFullGrid}>
        {data &&
          data.map((e, i) => {
            return (
              <div className={styles.mindFullBox} key={i}>
                <img src={e.image} alt="" />
                <div className={styles.mindFullFlex}>
                  <h2>{e.title}</h2>
                  <p
                    style={{
                      color: "black",
                      textAlign: "left",
                      fontSize: "12px",
                    }}
                  >
                    {e.desc.substr(0, 150)}
                  </p>
                  <h4>{e.packs} Packs</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MindFull;
