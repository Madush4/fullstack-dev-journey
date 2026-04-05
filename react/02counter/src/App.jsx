import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(14);
  // let counter = 15;
  const addValue = () => {
    setCounter((pervCounter) => pervCounter + 1);
    setCounter((pervCounter) => pervCounter + 1);
    setCounter((pervCounter) => pervCounter + 1);
    setCounter((pervCounter) => pervCounter + 1);
  };
  const removeValue = () => {
  setCounter(counter - 1)
  };
  return (
    <>
      <h1>React Course Learning</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: </p>
    </>
  );
}

export default App;
