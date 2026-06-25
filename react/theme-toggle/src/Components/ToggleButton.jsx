import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const HandleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <button className="font-bold bg-blue-700 px-2 py-1 rounded text-white" onClick={() => HandleToggle()}>Toggle</button>;
}

export default ToggleButton;
