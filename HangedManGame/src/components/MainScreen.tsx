import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { setNewWord, fetchData } from "../store/slices/playthrough-slice";

import LeftPanel from "./LeftPanel";
import styles from "./styles.module.css";

const MainScreen: React.FC = () => {
 const dispatch = useAppDispatch();
 const difficulty = useAppSelector(state => state.settings.difficulty);

  
  const goToNextRound = () => {
    dispatch(fetchData(difficulty));
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
