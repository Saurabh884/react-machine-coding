import React from "react";

const Child = React.memo(() => {
  console.log("Child component rendered");

  return <div> I am Child component</div>;
});

export default Child;
