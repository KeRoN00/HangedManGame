import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { changeContent, closeModal } from "../../store/slices/modal-slice";
import styles from "../styles.module.css";
import { FaCogs } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
const HowToPlayModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isRunning } = useAppSelector((state) => state.playthrough);
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeading}>
        <h1>How To Play</h1>
        <div className={styles.modalButtons}>
          {!isRunning && (
            <FaCogs
              onClick={() => dispatch(changeContent("settings"))}
              className={styles.modalButton}
            />
          )}
          <CgClose
            className={styles.modalButton}
            onClick={() => dispatch(closeModal())}
          />
        </div>
      </div>
      <div className={styles.modalContent}>
        <div>
        <p>
          The object of HangedMan is to guess hidden words before the stick
          figure is hung. The game consists in guessing the words by
          clicking on the letters on keyboard.
        </p>
        <p>The game is divided into rounds (min 3 - max 20). Each round is a different word to guess.</p>
        <h3>The game has three difficulty levels:</h3>
        <p>
          <span className={styles.difficultyHeading}>Easy:</span> the player has 10 chances to unreveal the hidden
          word per round, words consist of 5 letters,
        </p>
        <p>
          <span className={styles.difficultyHeading}>Medium:</span> the player has 8 chances to unreveal the hidden
          word per round, words consist of 8 letters,
        </p>
        <p>
          <span className={styles.difficultyHeading}>Hard:</span> the player has 6 chances to unreveal the hidden
          word per round, words consist of 11 letters.
        </p>
        <p> After all completed rounds, information about the completion of the game and the score appear </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayModal;
