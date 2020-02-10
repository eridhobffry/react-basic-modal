import React from "react";
import { BackgroundModal, Overlay, Modal } from "../styled/styled_modal";

const ModalApp = ({ isModalOpen, closeModal, children }) => {
  return (
    <BackgroundModal open={isModalOpen}>
      <Overlay onClick={closeModal} />
      <div onClick={closeModal} />
      <Modal>{children}</Modal>
    </BackgroundModal>
  );
};

export default ModalApp;
