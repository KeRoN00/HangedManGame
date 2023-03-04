import React from "react";
import EndingScoreModal from "./modalContents/EndingScoreModal";
import HowToPlayModal from "./modalContents/HowToPlayModal";
import SettingsModal from "./modalContents/SettingsModal";
import Overlay from "./Overlay";

interface ModalOptions {
  modalOption: string;
}

const Modal: React.FC<ModalOptions> = ({modalOption}) => {


  return (
    <Overlay>
      {modalOption === "howToPlay" && <HowToPlayModal />}
      {modalOption === "endingScore" && <EndingScoreModal />}
      {modalOption === "settings" && <SettingsModal />}
    </Overlay>
  );
};

export default Modal;
