import ThemeContextProvider from "./Context/ThemeContextProvider";
import Navbar from "./Components/Navbar";
import ToggleButton from "./Components/ToggleButton";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <div className="flex w-full items-center p-4 bg-zinc-700 shadow">
          <Navbar />
          <div className="ml-auto">
            <ToggleButton />
          </div>
        </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
