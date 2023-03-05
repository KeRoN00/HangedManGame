import React from "react";
import styles from "../styles.module.css";
import { CgClose } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { closeModal } from "../../store/slices/modal-slice";
import { resetKeyArray } from "../../store/slices/keyboard-slice";
import { ResetKeyboard } from "../../utils/ResetKeyboard";
import {
  endTheGame,
  toggleGameRunning,
} from "../../store/slices/playthrough-slice";

const EndingScoreModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { score } = useAppSelector((state) => state.playthrough);

  const EndGame = () => {
    dispatch(closeModal());
    dispatch(resetKeyArray());
    ResetKeyboard();
    dispatch(endTheGame());
  };
  const playAgain = () => {
    dispatch(closeModal());
    dispatch(resetKeyArray());
    ResetKeyboard();
    dispatch(endTheGame());
    dispatch(toggleGameRunning(true));
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeading}>
        <h1>{score == 0 ? "Better luck next time" : "Good job!"}</h1>
        <div className={styles.modalButtons}>
          <CgClose className={styles.modalButton} onClick={() => EndGame()} />
        </div>
      </div>
      <div className={styles.modalContent}>
        Modal Content for Settings
        <button className={styles.modalButton} onClick={() => playAgain()}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default EndingScoreModal;
