import { useState } from "react";
import { useAppDispatch } from "../../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../../shared/hooks/useAppSelector";
import styles from "./counter.module.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/counterSlice";

const ReduxCounter = () => {
  const [amount, setAmount] = useState<string>("");
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleUpdate = () => {
    dispatch(incrementByAmount(Number(amount)));
    setAmount("");
  };

  return (
    <div className={styles.app_container}>
      <h4 className={styles.app_header}>Counter:{count}</h4>
      <div className={styles.button_container}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <input
        type="number"
        placeholder="Enter value"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleUpdate}>Update count</button>
    </div>
  );
};

export default ReduxCounter;
