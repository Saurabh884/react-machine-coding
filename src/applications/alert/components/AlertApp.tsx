import { useState } from "react";
import type { alertType, alertItem } from "../types/alert.types";
import styles from "./alert.module.css";
import Alert from "./Alert";

const AlertApp = () => {
  const [alerts, setAlerts] = useState<alertItem[]>([]);

  const handleAlert = (type: alertType, message: string) => {
    const id = Date.now();

    setAlerts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      removeAlert(id);
    }, 3000);
  };

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };
  return (
    <div className={styles.app_container}>
      <h4>Alert app</h4>
      <div className={styles.button_container}>
        <button onClick={() => handleAlert("success", "success alert")}>
          Success
        </button>
        <button onClick={() => handleAlert("error", "error alert")}>
          Error
        </button>
        <button onClick={() => handleAlert("info", "info alert")}>Info</button>
      </div>

      <div className={styles.alert_container}>
        {alerts.map((alert) => (
          <Alert key={alert.id} alert={alert} onClose={removeAlert} />
        ))}
      </div>
    </div>
  );
};

export default AlertApp;
