import React, { useEffect } from "react";
import { useAppSelector } from "../hooks/storeHooks";

import LeftPanel from "./LeftPanel";
import styles from "./styles.module.css";

const MainScreen: React.FC = () => {
  const keys = useAppSelector(state => state.keyboard.keys);

  const goToNextRound =  () => {

  };

  return (
    <div className={styles.mainScreen}>
      <LeftPanel />
      <section
        onClick={() => goToNextRound()}
        className={`${styles.rightPanel} ${styles.panel}`}
      >
        Right panel
      </section>
    </div>
  );
};

export default MainScreen;
