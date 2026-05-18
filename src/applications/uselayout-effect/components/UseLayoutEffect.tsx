import { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "300px",
          padding: "20px",
          background: "lightblue",
        }}
      >
        Box Element
      </div>

      <h2>Width: {width}px</h2>
    </div>
  );
};

export default UseLayoutEffect;
