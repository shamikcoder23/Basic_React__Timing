import { useState } from "react";
import "./styles.css";

export default function App() {
  setInterval(LocalTime, 1000);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString({ hour12: false })
  );
  function LocalTime() {
    setTime(new Date().toLocaleTimeString({ hour12: false }));
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={LocalTime}>Get Time</button>
    </div>
  );
}
