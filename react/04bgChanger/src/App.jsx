import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive"); //varible, method

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <>
      <div
        className="flex h-screen items-center justify-center w-full duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:cursor-pointer bg-green-600"
            >
              Green
            </button>
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:cursor-pointer bg-red-500"
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:cursor-pointer bg-blue-500"
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
