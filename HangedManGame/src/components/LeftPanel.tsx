import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useFetchData } from "../hooks/useFetchData";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import {
  incrementMistakes,
  incrementScore,
  resetMistakes,
} from "../store/slices/playthrough-slice";
import { ResetKeyboard } from "../utils/ResetKeyboard";
import styles from "./styles.module.css";

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
        <GamePanel
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

interface GamePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  splittedWordArray: string[];
  keys: string[];
}

const GamePanel: React.FunctionComponent<GamePanelProps> = (
  props: GamePanelProps
) => {
  const { isLoading, splittedWordArray, keys } = props;
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {splittedWordArray.map((c, idx) => (
            <span key={idx}> {keys.includes(c) ? c : "_"} </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
