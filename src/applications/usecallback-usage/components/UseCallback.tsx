import { useCallback, useState } from "react";
import Child from "./Child";
import styles from "./usecallback.module.css";

const UseCallback = () => {
  const [count, setcount] = useState<number>(0);

  const handleIncrement = () => {
    setcount((prev) => prev + 1);
  };

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);
  //Put count in dependency to re-render child component
  return (
    <div className={styles.app_container}>
      <h2>Count:{count}</h2>
      <div className={styles.increment}>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <Child handleClick={handleClick} />
    </div>
  );
};

export default UseCallback;
