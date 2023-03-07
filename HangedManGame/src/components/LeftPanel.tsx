import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useFetchData } from "../hooks/useFetchData";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import {
  goToNextRound,
  incrementMistakes,
  incrementScore,
  resetMistakes,
  toggleGameRunning,
} from "../store/slices/playthrough-slice";
import { ResetKeyboard } from "../utils/ResetKeyboard";
import styles from "./styles.module.css";
import { WordPanel } from "./WordPanel";

//TODO: Remove conditional rendering when the welcome panel is made

const LeftPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { keys } = useAppSelector((state) => state.keyboard);
  const { mistakes, isRunning, score, currentRound } = useAppSelector(
    (state) => state.playthrough
  );
  const { word, isLoading } = useAppSelector(
    (state) => state.playthrough.fetchProperties
  );
  const { numOfMistakes, difficulty, numOfRounds } = useAppSelector(
    (state) => state.settings
  );

  const splittedWordArray = String(word).split("");

  let wordLength: number = splittedWordArray.length;

  let typedAnswerScore: number = 0;

  const keyToCheck: string = keys.at(keys.length - 1) || "";

  const goToNextRoundHandler = (success?: boolean) => {
    success && dispatch(incrementScore());
    setTimeout(() => {
      dispatch(goToNextRound());
      dispatch(resetKeyArray());
      ResetKeyboard();
      dispatch(resetMistakes());
      if (currentRound == numOfRounds-1) return;
      dispatch(useFetchData(difficulty));
    }, 500);
  };

 
    const StartGame = () => {
      dispatch(toggleGameRunning(true));
      dispatch(useFetchData(difficulty));
    };

  useEffect(() => {
    if (word.includes(keyToCheck)) {
      splittedWordArray.map((c) => keys.includes(c) && typedAnswerScore++);
      if (typedAnswerScore == wordLength && wordLength > 0) {
        goToNextRoundHandler(true);
      }
    } else {
      dispatch(incrementMistakes());
      if (mistakes == numOfMistakes - 1) {
        goToNextRoundHandler();
      }
    }
  }, [keys]);

  return (
    <section className={styles.panelLeft}>
      {isRunning ? (
        <>
          <h2 className={styles.score}>
            Score: {score} / {numOfRounds}
          </h2>
          <WordPanel
            isLoading={isLoading}
            splittedWordArray={splittedWordArray}
            keys={keys}
          />
        </>
      ) : (
        <button onClick={()=> {
          StartGame();
        }}>Start the game</button>
      )}
    </section>
  );
};

export default LeftPanel;
