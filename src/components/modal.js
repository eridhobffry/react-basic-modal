import React from "react";
import { BackgroundModal, Overlay, Modal } from "../styled/styled_modal";

const Modal = ({ isModalOpen, closeModal, children }) => {
  return (
    <BackgroundModal open={isModalOpen}>
      <Overlay onClick={closeModal} />
      <div onClick={closeModal} />
      <Modal>{children}</Modal>
    </BackgroundModal>
  );
};

export default Modal;
