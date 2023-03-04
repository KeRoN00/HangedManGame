import React from "react";
import { useAppDispatch } from "../../hooks/storeHooks";
import { closeModal } from "../../store/slices/modal-slice";
import styles from "../styles.module.css";
import { FaCogs} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
const HowToPlayModal: React.FC = () => {

  //faquestion
  //facogs
  const dispatch = useAppDispatch();
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeading}>
        <h1>How To Play</h1>
        <div className={styles.modalButtons}>
        <FaCogs  className={styles.modalButton}/>
        <CgClose
        className={styles.modalButton}
          onClick={() => dispatch(closeModal())}
        />
        </div>
      </div>
      <div className={styles.modalContent}>Modal Content for HowToPlay</div>
    </div>
  );
};

export default HowToPlayModal;
