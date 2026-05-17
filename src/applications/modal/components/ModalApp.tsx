import { useState } from "react";
import Modal from "./Modal";
import styles from "./modal.module.css";

const ModalApp = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className={styles.app_container}>
      <h4 className={styles.app_header}>Modal App</h4>
      <button onClick={() => setShowModal(true)}>ShowModal</button>
      <Modal isOpen={showModal} isClose={() => setShowModal(false)}>
        <h5>I am modal component</h5>
        <p>Description of modal component</p>
      </Modal>
    </div>
  );
};

export default ModalApp;
