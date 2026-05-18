import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input type="text" placeholder="Enter text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default UseRef;
