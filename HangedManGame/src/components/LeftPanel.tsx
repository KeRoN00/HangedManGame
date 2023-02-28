import React from "react";
import { useAppSelector } from "../hooks/storeHooks";

import styles from "./styles.module.css";

const LeftPanel: React.FC = () => {
  const keys = useAppSelector((state) => state.keyboard.keys);
  return (
    <section className={styles.panel}>
      {keys.length == 0 ? <p>No keys</p> : (keys.map((key) => <span key={key}>{key}</span>))}
    </section>
  );
};

export default LeftPanel;
