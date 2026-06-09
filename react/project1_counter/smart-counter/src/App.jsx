import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import Child from "./child.jsx";

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

function ParentComponent() {
  const [count, setCount] = useState(0);
  const showUser = useCallback(() =>{
      console.log("Madush");;
  },[])

  return (
    <>
      <button onClick={()=> {setCount(count+1)}}>Increment {count}</button>
      <Child showUser = {showUser}/>
    </>
  );
}

export default ParentComponent;
