import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import { ResetKeyboard } from "../utils/ResetKeyboard";
import { useFetchData } from "../hooks/useFetchData";
import LeftPanel from "./LeftPanel";
import styles from "./styles.module.css";

const MainScreen: React.FC = () => {
 const dispatch = useAppDispatch();
 const difficulty = useAppSelector(state => state.settings.difficulty);

  
  const goToNextRound = () => {
    dispatch(resetKeyArray());
    ResetKeyboard();
    dispatch(useFetchData(difficulty));
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
