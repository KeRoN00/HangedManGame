import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useFetchData } from "../hooks/useFetchData";
import { openModal } from "../store/slices/modal-slice";
import { toggleGameRunning } from "../store/slices/playthrough-slice";
import styles from "./styles.module.css";

interface TopBarListProps extends React.HTMLAttributes<HTMLUListElement> {
  isMobile: boolean;
  isListOpen: boolean;
  setIsListOpen: (value: boolean) => void;
}

//TODO: Create ListItem component with props that will trigger the modals for settings and 'how to play'

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
          dispatch(openModal("howToPlay"));
        }}
      >
        How To Play
      </li>
      <li onClick={() => {}}>
        {/* Info */}
        Info
      </li>
      <li
        className={isRunning ? styles.hidden : ""}
        onClick={() => {
          dispatch(openModal("settings"));
        }}
      >
        Settings
      </li>
    </ul>
  );
};

export default TopBarList;
