import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleDateString());
  const [showTime, setShowTime] = useState(true);

  useEffect(() => {
    if (!showTime) {
      return;  // Don't run interval if hidden
    }
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [showTime]);
  return (
    <>
      <button onClick={() => setShowTime(!showTime)}>
        {showTime ? "Hide" : "Show"} Time
      </button>
      {showTime && <h1>Current Time: {time}</h1>}
    </>
  );
}
