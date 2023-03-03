import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { FaBars, FaPlus } from "react-icons/fa";

import TopBarList from "./TopBarList";

const TopBar: React.FC = () => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
      <TopBarList
        isMobile={isMobile}
        isListOpen={isListOpen}
        setIsListOpen={setIsListOpen}
      />
    </div>
  );
};

export default TopBar;
