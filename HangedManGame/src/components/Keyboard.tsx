import React from "react";
import styles from "./styles.module.css";
import { keyboardKeys } from "../data/keyboardKeys";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { DisableKey } from "../utils/DisableKey";
import { addKeyToArray } from "../store/slices/keyboard-slice";

const Keyboard: React.FC = () => {
const dispatch = useAppDispatch();
const {isRunning} = useAppSelector((state) => state.playthrough)

  const handleKeyPressed = (
    e: React.MouseEvent<HTMLButtonElement>,
    key: string
  ) => {
    if(!isRunning) return;
    DisableKey(e);
    dispatch(addKeyToArray(key));
  };

  return (
    <div className={styles.keyboard}>
      {keyboardKeys.map((line, lineIdx) => (
        <div key={lineIdx} className={styles.keyboardLine}>
          {line.map((key, keyIdx) => (
            <button
              id="keyboardKey"
              onClick={(e) => handleKeyPressed(e, key)}
              key={keyIdx}
              className={styles.keyboardKey}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
