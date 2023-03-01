import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import { incrementScore } from "../store/slices/playthrough-slice";
import { ResetKeyboard } from "../utils/ResetKeyboard";
import { useFetchData } from "../hooks/useFetchData";
import styles from "./styles.module.css";

const LeftPanel: React.FC = () => {
  const [mistakes, setMistakes] = useState<number>(0);
  const dispatch = useAppDispatch();

  const { word } = useAppSelector((state) => state.playthrough.fetchProperties);
  const { keys } = useAppSelector((state) => state.keyboard);
  const { numOfMistakes, difficulty } = useAppSelector(
    (state) => state.settings
  );

  const splittedWordArray = word.split("");

  let wordLength: number = splittedWordArray.length;

  let typedAnswer: number = 0;

  const keyToCheck: string = keys.at(keys.length - 1) || "";

  const triggerNextRound = (success?: boolean) => {
    dispatch(resetKeyArray());
    ResetKeyboard();
    setMistakes(0);
    dispatch(useFetchData(difficulty));
    success && dispatch(incrementScore());
  };

  useEffect(() => {
    if (word.includes(keyToCheck)) {
      splittedWordArray.map((c) => keys.includes(c) && typedAnswer++);
      if (typedAnswer == wordLength && wordLength > 0) {
        triggerNextRound(true);
      }
    } else {
      setMistakes((mistakes) => mistakes + 1);
      console.log("mistakes:", mistakes);
      if (mistakes == numOfMistakes - 1) {
        triggerNextRound();
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
