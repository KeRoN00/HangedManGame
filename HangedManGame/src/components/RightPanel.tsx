import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../hooks/storeHooks";
import { DrawHangedMan } from "../utils/DrawHangedMan";
import HangedManPart, { HangedManParts } from "./hangedMan/HangedManPart";
import styles from "./styles.module.css";

const INITIAL_SHOWN_VALUES: HangedManParts[] = [
  { partId: 1, isShown: false },
  { partId: 2, isShown: false },
  { partId: 3, isShown: false },
  { partId: 4, isShown: false },
  { partId: 5, isShown: false },
  { partId: 6, isShown: false },
  { partId: 7, isShown: false },
  { partId: 8, isShown: false },
  { partId: 9, isShown: false },
  { partId: 10, isShown: false },
];

const RightPanel: React.FC = () => {
  const {mistakes} = useAppSelector(
    (state) => state.playthrough
  );
  const {difficulty} = useAppSelector(state => state.settings);
  
  const [itemsShown, setItemsShown] =
    useState<HangedManParts[]>(INITIAL_SHOWN_VALUES);

  useEffect(() => {
    const newArray = DrawHangedMan(itemsShown,mistakes, difficulty);
    setItemsShown(newArray);
  }, [mistakes]);

  return (
    <section className={`${styles.panelRight} ${styles.panel}`}>
      <div className={styles.hangedManPanel}>
        <div className={styles.hangedManImageContainer}>
          {itemsShown.map(item => (<HangedManPart key={item.partId} partId={item.partId} isShown={item.isShown} />))}
          
        </div>
      </div>
    </section>
  );
};

export default RightPanel;
