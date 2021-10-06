import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <h3>Current count is: {count}</h3>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
