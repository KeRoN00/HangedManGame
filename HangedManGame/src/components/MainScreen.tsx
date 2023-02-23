import React from "react";
import styles from "./styles.module.css";
const MainScreen: React.FC = () => {
  return (
    <div className={styles.mainScreen}>
      <section className={`${styles.leftPanel} ${styles.panel}`}>Left</section>
      <section className={`${styles.rightPanel} ${styles.panel}`}>Right</section>
    </div>
  );
};

export default MainScreen;
