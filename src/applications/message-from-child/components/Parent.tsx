import { useState } from "react";
import Child from "./Child";
import styles from "./parent-child.module.css";

const Parent = () => {
  const [message, setMessage] = useState<string>("");
  const messageFromChild = (data: string) => {
    setMessage(data);
  };
  return (
    <div className={styles.container}>
      <h2>Message from child:{message}</h2>
      <Child messageFromChild={messageFromChild} />
    </div>
  );
};

export default Parent;
