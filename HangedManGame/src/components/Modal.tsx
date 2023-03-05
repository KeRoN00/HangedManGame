import React from "react";
import EndingScoreModal from "./modalContents/EndingScoreModal";
import HowToPlayModal from "./modalContents/HowToPlayModal";
import SettingsModal from "./modalContents/SettingsModal";
import styles from './styles.module.css'

interface ModalOptions {
  modalOption: string;
}

const Modal: React.FC<ModalOptions> = ({modalOption}) => {


  return (
    <div className={styles.overlay}>
      {modalOption === "howToPlay" && <HowToPlayModal />}
      {modalOption === "endingScore" && <EndingScoreModal />}
      {modalOption === "settings" && <SettingsModal />}
    </div>
  );
};

export default Modal;
