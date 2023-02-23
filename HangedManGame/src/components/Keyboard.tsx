import React from "react";
import styles from "./styles.module.css";
import { keyboardKeys } from "../utils/keyboardKeys";
import { disableKey, ResetKeyboard } from "../utils/gamePlayThrough";

const Keyboard: React.FC = () => {
  
  const resetKeyboardHandler = () => {
    ResetKeyboard(styles.keyboardKey.toString());
  }
  return (
    <div className={styles.keyboard}>
      {keyboardKeys.map((line, lineIdx) => (
        <div key={lineIdx} className={styles.keyboardLine}>
          {line.map((key, keyIdx) => (
            <button  id='keyboardKey' onClick={(e)=> disableKey(e)} key={keyIdx} className={styles.keyboardKey}>{key}</button>
          ))}
        </div>
      ))}
      <button  onClick={() => resetKeyboardHandler()}>Reset</button>
    </div>
  );
};

export default Keyboard;
