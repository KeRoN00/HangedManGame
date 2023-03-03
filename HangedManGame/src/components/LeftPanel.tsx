import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useFetchData } from "../hooks/useFetchData";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import {
  goToNextRound,
  incrementMistakes,
  incrementScore,
  resetMistakes,
} from "../store/slices/playthrough-slice";
import { ResetKeyboard } from "../utils/ResetKeyboard";
import styles from "./styles.module.css";
import { WordPanel } from "./WordPanel";

const LeftPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { keys } = useAppSelector((state) => state.keyboard);
  const { mistakes, isRunning } = useAppSelector((state) => state.playthrough);
  const { word, isLoading } = useAppSelector(
    (state) => state.playthrough.fetchProperties
  );
  const { numOfMistakes, difficulty } = useAppSelector(
    (state) => state.settings
  );

  const splittedWordArray = String(word).split("");

  let wordLength: number = splittedWordArray.length;

  let typedAnswerScore: number = 0;

  const keyToCheck: string = keys.at(keys.length - 1) || "";

  const goToNextRoundHandler = (success?: boolean) => {
    success && dispatch(incrementScore());
    dispatch(resetKeyArray());
    ResetKeyboard();
    dispatch(resetMistakes());
    dispatch(goToNextRound());
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
      console.log("mistakes:", mistakes);
      if (mistakes == numOfMistakes - 1) {
        goToNextRoundHandler();
      }
    }
  }, [keys]);

  return (
    <section className={styles.panel}>
      {isRunning ? (
        <WordPanel
          isLoading={isLoading}
          splittedWordArray={splittedWordArray}
          keys={keys}
        />
      ) : (
        <p>Start the game</p>
      )}
    </section>
  );
};





export default LeftPanel;
