import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "20px",
      }}
    >
      <h1 style={{ marginLeft: "40px" }}>{counter}</h1>
      <div>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
};
