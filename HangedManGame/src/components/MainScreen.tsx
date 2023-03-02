import React from "react";
import LeftPanel from "./LeftPanel";
import styles from "./styles.module.css";

const MainScreen: React.FC = () => {

  return (
    <div className={styles.mainScreen}>
      <LeftPanel />
      <section
        className={`${styles.rightPanel} ${styles.panel}`}
      >
        Right panel
      </section>
    </div>
  );
};

export default MainScreen;
