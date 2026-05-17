import type { alertItem } from "../types/alert.types";
import styles from "./alert.module.css";

interface AlertProps {
  alert: alertItem;
  onClose: (id: number) => void;
}

const Alert = ({ alert, onClose }: AlertProps) => {
  return (
    <div
      className={`${styles.alert_item} ${styles[alert.type]}`}
      key={alert.id}
    >
      <p>{alert.message}</p>
      <button onClick={() => onClose(alert.id)}>&times;</button>
    </div>
  );
};

export default Alert;
