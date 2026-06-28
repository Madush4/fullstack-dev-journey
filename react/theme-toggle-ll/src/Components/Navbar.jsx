import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
   
      <div className="flex w-full max-w-5xl justify-between p-4 text-white">
        <h1>NavBar</h1>
        <p>Current theme is: {theme}</p>
      </div>
    
  );
}

export default Navbar;
