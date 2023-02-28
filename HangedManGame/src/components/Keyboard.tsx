import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { keyboardKeys } from "../utils/keyboardKeys";
import { DisableKey } from "../utils/gamePlayThrough";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { addKeyToArray } from "../store/slices/keyboard-slice";

const Keyboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleKeyClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: string
  ) => {
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
              onClick={(e) => handleKeyClicked(e, key)}
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
