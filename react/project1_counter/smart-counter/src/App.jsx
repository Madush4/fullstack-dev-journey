import { useState, useEffect, useRef } from "react";
import "./App.css";

function SmartCounter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const clickCountRef = useRef(0);

  useEffect(() => {
    console.log(`The count changed to : ${count}`);
    clickCountRef.current = clickCountRef.current + 1;
  }, [count]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus</button>

      <h2>Total Render Count : {clickCountRef.current}</h2>
    </>
  );
}

export default SmartCounter;
