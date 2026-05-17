import styles from "./modal.module.css";

interface ModalItemProps {
  isOpen: boolean;
  isClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isClose, isOpen, children }: ModalItemProps) => {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={isClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
