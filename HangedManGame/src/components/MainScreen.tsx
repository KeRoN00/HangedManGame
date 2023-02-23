import React, { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import styles from "./styles.module.css";

const MainScreen: React.FC = () => {
  const [randomWord, setRandomWord] = useState<string[]>(["start"]);
  const [keyWord, setKeyWord] = useState<string[]>(['']);
  const { data, fetchData } = useFetchData();
  const fetchRandomWord = () => {
    fetchData();
  };

  
  return (
    <div className={styles.mainScreen}>
      <section className={`${styles.leftPanel} ${styles.panel}`}>
      </section>
      <section
        onClick={() => fetchRandomWord()}
        className={`${styles.rightPanel} ${styles.panel}`}
      >
        {data}
      </section>
    </div>
  );
};

export default MainScreen;
