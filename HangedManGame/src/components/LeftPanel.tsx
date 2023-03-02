import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { incrementMistakes } from "../store/slices/playthrough-slice";
import { goToNextRoundHandler } from "../utils/goToNextRoundHandler";
import styles from "./styles.module.css";

const LeftPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { keys } = useAppSelector((state) => state.keyboard);
  const { word } = useAppSelector((state) => state.playthrough.fetchProperties);
  const { mistakes } = useAppSelector((state) => state.playthrough);
  const { numOfMistakes } = useAppSelector((state) => state.settings);

  const splittedWordArray = word.split("");

  let wordLength: number = splittedWordArray.length;

  let typedAnswerScore: number = 0;

  const keyToCheck: string = keys.at(keys.length - 1) || "";

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
      {word.length > 0 ? (
        <div>
          {splittedWordArray.map((c, idx) => (
            <span key={idx}> {keys.includes(c) ? c : "_"} </span>
          ))}
        </div>
      ) : (
        <p>Waiting for start</p>
      )}
    </section>
  );
};

export default LeftPanel;
