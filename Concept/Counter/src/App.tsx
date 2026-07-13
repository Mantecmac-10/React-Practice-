import { useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(0)}>Reset</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  );
}
