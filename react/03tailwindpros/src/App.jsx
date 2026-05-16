import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cards from './components/Cards.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className="text-3xl bg-blue-900 p-4">Vite with Tailwind</h2>
      <Cards username="Madush" />
      <Cards username="Damith" />
      <Cards username="John" post='Staff Enginner'/>
    </>
  );
}

export default App
