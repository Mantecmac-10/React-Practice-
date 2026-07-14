import { useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "sans-serif",
        marginTop: "200px",
        fontSize: "2em",
      }}
    >
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "70px",
        }}
      >
        <div
          style={{
            border: "3px solid",
            borderRadius: "30px",
            width: "100px",
          }}
        >
          <button onClick={() => setcount(count + 1)}>Increment</button>
        </div>
        <div
          style={{
            border: "3px solid",
            borderRadius: "30px",
            width: "100px",
          }}
        >
          <button onClick={() => setcount(0)}>Reset</button>
        </div>
        <div
          style={{
            outline: "3px solid",
            borderRadius: "30px",
            width: "100px",
            padding: "0px",
          }}
        >
          <button onClick={() => setcount(count - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
