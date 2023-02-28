import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import { fetchData } from "../store/slices/playthrough-slice";
import { ResetKeyboard } from "../utils/gamePlayThrough";

import LeftPanel from "./LeftPanel";
import styles from "./styles.module.css";

const MainScreen: React.FC = () => {
 const dispatch = useAppDispatch();
 const difficulty = useAppSelector(state => state.settings.difficulty);

  
  const goToNextRound = () => {
    dispatch(resetKeyArray());
    ResetKeyboard();
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
