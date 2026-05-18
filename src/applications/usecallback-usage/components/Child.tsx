import React from "react";

interface UseCallbackProps {
  handleClick: () => void;
}

const Child = React.memo(({ handleClick }: UseCallbackProps) => {
  console.log("child component re rendered");
  return (
    <div>
      <button onClick={handleClick}>Child button</button>
    </div>
  );
});

export default Child;
