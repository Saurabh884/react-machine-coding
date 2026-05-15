import { useEffect, useState } from "react";
import styles from "./timer.module.css";

const Timer = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleStartStop = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimer(0);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const hours = Math.floor(timer / 3600);
  const mins = Math.floor((timer % 3600) / 60);
  const secs = timer / 60;

  return (
    <div className={styles.container}>
      <h4>
        Timer:{hours}hours {mins}mins{secs}secs
      </h4>
      <div>
        <button onClick={handleStartStop}>{isActive ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
