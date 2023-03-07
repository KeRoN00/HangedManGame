import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { openModal } from "../store/slices/modal-slice";
import LeftPanel from "./LeftPanel";
import styles from "./styles.module.css";

// TODO: add LeftPanel with Graphics andWelcomePanel when the game is notRunning

const MainScreen: React.FC = () => {

  const dispatch = useAppDispatch();
  const {currentRound, isRunning} = useAppSelector((state)=> state.playthrough);
  const {numOfRounds} = useAppSelector((state)=> state.settings);
  

  useEffect(()=> {
    if(currentRound == numOfRounds) {
      dispatch(openModal('endingScore'));
    }
  }, [currentRound])

  return (
    <div className={styles.mainScreen}>
      <LeftPanel />
      <section
        className={`${styles.rightPanel} ${styles.panel}`}
      >
        {isRunning ? <div>Round: {currentRound+1} of {numOfRounds}</div> : <h3>HANGED MAN WIDGET</h3>}
      </section>
    </div>
  );
};

export default MainScreen;
