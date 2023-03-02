import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useFetchData } from "../hooks/useFetchData";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import {
  endTheGame,
  toggleGameRunning,
} from "../store/slices/playthrough-slice";
import { ResetKeyboard } from "../utils/ResetKeyboard";
import styles from "./styles.module.css";

interface TopBarListProps extends React.HTMLAttributes<HTMLUListElement> {
  isMobile: boolean;
  isListOpen: boolean;
  setIsListOpen: (value: boolean) => void;
}

const TopBarList: React.FunctionComponent<TopBarListProps> = (
  props: TopBarListProps
) => {
  const { isMobile, isListOpen, setIsListOpen } = props;
  const dispatch = useAppDispatch();
  const { difficulty } = useAppSelector((state) => state.settings);
  const { isRunning } = useAppSelector((state) => state.playthrough);

  const StartGame = () => {
    dispatch(toggleGameRunning(true));
    setIsListOpen(false);
    dispatch(useFetchData(difficulty));
  };

  const EndGame = () => {
    dispatch(resetKeyArray());
    ResetKeyboard();
    dispatch(endTheGame());
  };
  return (
    <ul
      className={`${
        isMobile
          ? isListOpen
            ? styles.ResponsiveOpen
            : styles.ResponsiveClosed
          : styles.topBarList
      } ${styles.list}`}
    >
      <li
        onClick={() => StartGame()}
        className={isRunning ? styles.hidden : ""}
      >
        PLAY!
      </li>
      <li
        onClick={() => {
          // SHOW HOW TO PLAY MODAL
        }}
      >
        How To Play
      </li>
      <li onClick={() => EndGame()}>
        {/* Info */}
        end
      </li>
      <li
        onClick={() => {
          // SHOW SETTINGS MODAL
        }}
      >
        Settings
      </li>
    </ul>
  );
};

export default TopBarList;
