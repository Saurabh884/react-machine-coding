import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState<string>("");
  const messageFromChild = (data: string) => {
    setMessage(data);
  };
  return (
    <div>
      <h2>Message from child:{message}</h2>
      <Child messageFromChild={messageFromChild} />
    </div>
  );
};

export default Parent;
