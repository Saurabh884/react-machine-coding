import { useState, type ChangeEvent } from "react";

interface ChildProps {
  messageFromChild: (data: string) => void;
}

const Child = ({ messageFromChild }: ChildProps) => {
  const [childData, setChildData] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChildData(e.target.value);
  };

  const handleMessage = () => {
    messageFromChild(childData);
    setChildData("");
  };

  return (
    <div>
      <input type="text" value={childData} onChange={handleChange} />
      <button onClick={handleMessage}>Get Message</button>
    </div>
  );
};

export default Child;
