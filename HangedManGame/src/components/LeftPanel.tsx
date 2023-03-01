import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import { fetchData, incrementScore } from "../store/slices/playthrough-slice";
import { ResetKeyboard } from "../utils/ResetKeyboard";

import styles from "./styles.module.css";

const LeftPanel: React.FC = () => {
  const [mistakes, setMistakes] = useState<number>(1);
  const dispatch = useAppDispatch();

  const { word } = useAppSelector((state) => state.playthrough.fetchProperties);
  const { keys } = useAppSelector((state) => state.keyboard);
  const { numOfMistakes, difficulty } = useAppSelector(
    (state) => state.settings
  );

  const splittedWord = word.split("");

  let wordLength: number = splittedWord.length;

  let typedAnswer: number = 0;

  const keyToCheck: string = keys.at(keys.length - 1) || "";

  const triggerNextRound = (success?: boolean) => {
    dispatch(resetKeyArray());
    ResetKeyboard();
    setMistakes(1);
    dispatch(fetchData(difficulty));
    success && dispatch(incrementScore());
  };

  useEffect(() => {
    if (word.includes(keyToCheck)) {
      splittedWord.map((c) => keys.includes(c) && typedAnswer++);
      if (typedAnswer == wordLength && wordLength > 0) {
        triggerNextRound(true);
      }
    } else {
      setMistakes((mistakes) => mistakes + 1);
      console.log("mistakes:", mistakes);
      if (mistakes == numOfMistakes) {
        triggerNextRound();
      }
    }
  }, [keys]);
  return (
    <section className={styles.panel}>
      {word.length > 0 ? (
        <div>
          {splittedWord.map((c, idx) => (
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
