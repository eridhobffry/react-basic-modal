import React, { useState } from "react";
import "./index.css";
import { Button, ButtonInModal } from "../styled/styled_global";
import ModalApp from "../components/modal";

const AppModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInnerModalOpen, setIsInnerModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0,0.5)"
    }
  };

  return (
    <div className="appModal">
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <ModalApp
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        style={modalStyle}
      >
        <img
          width="100%"
          style={{ borderRadius: 3 }}
          src="https://source.unsplash.com/random"
          alt="unsplash"
        />
        <ButtonInModal onClick={closeModal}>Close</ButtonInModal>
      </ModalApp>
    </div>
  );
};

export default AppModal;
