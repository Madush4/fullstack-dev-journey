import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const HandleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={HandleToggle}
      className={`
        relative inline-flex items-center gap-2
        px-4 py-2 rounded-full
        text-sm font-semibold
        border transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDark
          ? "bg-zinc-800 border-zinc-600 text-yellow-300 hover:bg-zinc-700 focus:ring-yellow-400"
          : "bg-white border-zinc-300 text-zinc-700 hover:bg-zinc-100 focus:ring-blue-400"
        }
      `}
      aria-label="Toggle theme"
    >
      <span className="text-base leading-none">
        {isDark ? "🌙" : "☀️"}
      </span>
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

export default ToggleButton;
