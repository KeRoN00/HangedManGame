import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { FaBars, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { toggleGameRunning } from "../store/slices/playthrough-slice";
import { useFetchData } from "../hooks/useFetchData";

const TopBar: React.FC = () => {
  
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const isRunning = useAppSelector((state) => state.playthrough.isRunning);
  const {difficulty} = useAppSelector((state)=> state.settings)
  const dispatch = useAppDispatch();

  const StartTheGame = () => {
    dispatch(toggleGameRunning(true));
    setIsListOpen(false);
    dispatch(useFetchData(difficulty));
  };
  
  const handleWindowResize = () => {
    window.innerWidth < 800
      ? setIsMobile(true)
      : (setIsMobile(false), setIsListOpen(false));
  };

  useEffect(() => {
    handleWindowResize();
  }, []);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={styles.topBarContainer}>
      <h1>HangedMan</h1>
      {isListOpen ? (
        <FaPlus
          className={`${styles.Close} ${styles.Icon}`}
          size={32}
          onClick={() => {
            setIsListOpen(false);
          }}
        />
      ) : (
        <FaBars
          className={styles.Icon}
          size={32}
          onClick={() => {
            setIsListOpen(true);
          }}
        />
      )}

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
          onClick={() => StartTheGame()}
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
        <li
          onClick={() => {
            dispatch(toggleGameRunning(false));
            // SHOW INFO MODAL
          }}
        >
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
    </div>
  );
};

export default TopBar;
