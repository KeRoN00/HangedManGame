import React, { useState, useEffect, useContext, useCallback } from "react";
import styles from "./styles.module.css";
import { FaBars, FaPlus } from "react-icons/fa";
import { GameContext } from "../store/game-context";

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const GameCtx = useContext(GameContext);


  const StartTheGame = () => {
    GameCtx?.toggleGameRunning(true);
    setIsOpen(false)
  };
  useEffect(() => {
    window.innerWidth < 800
      ? setIsMobile(true)
      : (setIsMobile(false), setIsOpen(false));
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      window.innerWidth < 800
        ? setIsMobile(true)
        : (setIsMobile(false), setIsOpen(false));
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <div className={styles.topBarContainer}>
      <h1>HangedMan</h1>
      {isOpen ? (
        <FaPlus
          className={`${styles.Close} ${styles.Icon}`}
          size={32}
          onClick={() => {
            setIsOpen(false);
          }}
        />
      ) : (
        <FaBars
          className={styles.Icon}
          size={32}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      )}

      <ul
        className={`${
          isMobile
            ? isOpen
              ? styles.ResponsiveOpen
              : styles.ResponsiveClosed
            : styles.topBarList
        } ${styles.list}`}
      >
        <li
          onClick={() => StartTheGame()}
          className={GameCtx?.isRunning ? styles.hidden : ""}
        >
          PLAY!
        </li>
        <li
          onClick={() => {setShowModal(prev => !prev)
            // SHOW HOW TO PLAY MODAL
          }}
        >
          How To Play
        </li>
        <li
          onClick={() => {
            // SHOW INFO MODAL
          }}
        >
          Info
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
