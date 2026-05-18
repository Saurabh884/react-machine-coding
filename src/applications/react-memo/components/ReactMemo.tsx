import { useState } from "react";
import Child from "./Child";
import styles from "./react-memo.module.css";

const ReactMemo = () => {
  const [count, setcount] = useState<number>(0);

  const handleIncrement = () => {
    setcount((prev) => prev + 1);
  };
  return (
    <div className={styles.app_container}>
      <h2>Count:{count}</h2>
      <div className={styles.increment}>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <Child />
    </div>
  );
};

export default ReactMemo;
