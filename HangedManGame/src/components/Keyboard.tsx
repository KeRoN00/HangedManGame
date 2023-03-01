import React from "react";
import styles from "./styles.module.css";
import { keyboardKeys } from "../data/keyboardKeys";
import {handleKeyPressed} from "../utils/handleKeyPressed"

const Keyboard: React.FC = () => {

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
