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
import { useFetchData } from "../../hooks/useFetchData";

// TODO: Style this component with displayed score

const EndingScoreModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { score } = useAppSelector((state) => state.playthrough);
  const { difficulty, numOfRounds } = useAppSelector((state) => state.settings);
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
    dispatch(useFetchData(difficulty));
    dispatch(toggleGameRunning(true));
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeading}>
        <h1>
          {score < numOfRounds / 2 ? "Better luck next time" : "Good job!"}
        </h1>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.scoreDetails}>
          <h1>Your score:</h1>
          <h2>{score} / {numOfRounds}</h2>
        </div>
        <div className={styles.bottomButtons}>
          <button
            className={styles.playAgainButton}
            onClick={() => playAgain()}
          >
            Play again
          </button>
          <CgClose className={styles.modalButton} onClick={() => EndGame()} />
        </div>
      </div>
    </div>
  );
};

export default EndingScoreModal;
