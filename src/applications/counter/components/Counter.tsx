import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  return (
    <div className={styles.container}>
      <h4>Counter:{counter}</h4>
      <div className={styles.button_container}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
